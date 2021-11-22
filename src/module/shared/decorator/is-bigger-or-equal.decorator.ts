import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as moment from 'moment-timezone';
import { Constants } from '../../../common';

export function IsBiggerThanOrEqual(property: string, validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'isBiggerThanOrEqual',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return moment(value).format(Constants.DATE_FILTER_FORMAT) >= moment(relatedValue).format(Constants.DATE_FILTER_FORMAT);
        },
      },
    });
  };
}
