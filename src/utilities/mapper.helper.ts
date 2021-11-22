import { Logger } from '@nestjs/common';
import { ClassConstructor, classToPlain, deserialize, plainToClass, serialize } from 'class-transformer';

export class MapperHelper {
    static logger = new Logger('MapperHelper');

    static toClient<T>(classType: ClassConstructor<T>, fromObject: Object): T {
        const serializeObject = classToPlain(fromObject, { enableImplicitConversion: false });
        const mapped = plainToClass(classType, serializeObject, { strategy: 'exposeAll', excludeExtraneousValues: true });
        this.logger.debug({
            serializeObject: serializeObject,
            mapped: mapped,
        });

        return mapped;
    }

    static toClientList<T>(classType: ClassConstructor<T>, fromObjectList: Object[]): T[] {
        const returnList: T[] = [];
        for (const fromObject of fromObjectList) {
            returnList.push(this.toClient(classType, fromObject));
        }
        return returnList;
    }
}
