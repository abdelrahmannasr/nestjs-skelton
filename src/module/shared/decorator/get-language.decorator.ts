import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Language } from '../../../data';
import { Constants } from '../../../common';

export const GetLanguage = createParamDecorator((_data, ctx: ExecutionContext): any => {
    const req = ctx.switchToHttp().getRequest();
    let languageIsoCode: Language;

    req.headers['accept-language'] ?
        req.headers['accept-language'].includes(Language.English) ?
            languageIsoCode = Language.English : languageIsoCode = Language.Arabic :
        languageIsoCode = Constants.DEFAULT_LANG as Language;
    return languageIsoCode;
});
