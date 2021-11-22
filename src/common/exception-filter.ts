import { I18nService } from 'nestjs-i18n';
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
    private logger = new Logger('AllExceptionsFilter');

    constructor(private readonly i18n: I18nService) { }

    async catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const statusCode = exception.getStatus();

        let message = exception.getResponse() as {
            key: string;
            args: Record<string, any>;
        };

        if (!message.key && message['message']) {
            const messages = [];
            if (Array.isArray(message['message'])) {
                for (const key of message['message']) {
                    let sentKey = key;
                    const splitKey = key.split('.');
                    if (splitKey.length > 2) {
                        const keyArray = [splitKey[splitKey.length - 2], splitKey[splitKey.length - 1]];
                        sentKey = keyArray.join('.');
                    }
                    message = await this.i18n.translate(sentKey, {
                        lang: ctx.getRequest().i18nLang,
                        args: message.args,
                    });
                    messages.push(message);
                }
                response.status(statusCode).json({ code: statusCode, errors: messages });
            } else {

                response.status(statusCode).json({ code: statusCode, errors: message['message'] ? [message['message']] : [message] });
            }
        } else {
            message = await this.i18n.translate(message.key, {
                lang: ctx.getRequest().i18nLang,
                args: message.args,
            });

            response.status(statusCode).json({ code: statusCode, errors: [message] });
        }

    }
}
