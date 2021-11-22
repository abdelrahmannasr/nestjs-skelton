import { Transform } from 'class-transformer';

export function ToBoolean() {
    const toPlain = Transform(
        ({ value }) => {
            return value;
        },
        {
            toPlainOnly: true,
        }
    );
    const toClass = (target: any, key: string) => {
        return Transform(
            ({ obj }) => {
                return valueToBoolean(obj[key]);
            },
            {
                toClassOnly: true,
            }
        )(target, key);
    };
    return  (target: any, key: string) => {
        toPlain(target, key);
        toClass(target, key);
    };
}

function valueToBoolean(value: any) {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (value.toLowerCase() === 'true') {
        return true;
    }
    if (value.toLowerCase() === 'false') {
        return false;
    }
    return undefined;
}

