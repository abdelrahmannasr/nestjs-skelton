import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Constants } from '../../../common';

@ValidatorConstraint({ name: 'IsValidUsername', async: false })
export class IsValidUsername implements ValidatorConstraintInterface {

    validate(value: string) {
        if (Constants.PHONE_NUMBER_REGEX.test(value)) {
            return true;
        }
        if (Constants.EMAIL_REGEX.test(value)) {
            return true;
        }
        return false;
    }

    defaultMessage(validationArguments: ValidationArguments) { // here you can provide default error message if validation failed
        return `${validationArguments.property} is not valid`;
    }
}
