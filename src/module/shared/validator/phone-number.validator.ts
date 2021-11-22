import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Constants } from '../../../common';

@ValidatorConstraint({ name: 'isValidPhoneNumber', async: false })
export class IsValidPhoneNumber implements ValidatorConstraintInterface {

    validate(value: string) {
        return Constants.PHONE_NUMBER_REGEX.test(value);
    }

    defaultMessage(validationArguments: ValidationArguments) { // here you can provide default error message if validation failed
        return `${validationArguments.property} is not valid`;
    }
}
