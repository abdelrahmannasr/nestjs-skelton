import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Constants } from '../../../common';

@ValidatorConstraint({ name: 'isValidSequenceNumber', async: false })
export class IsValidSequenceNumber implements ValidatorConstraintInterface {

    validate(value: string) {
        return Constants.TRUCK_SEQUENCE_NUMBER_LENGTH_REGEX.test(value);
    }

    defaultMessage(validationArguments: ValidationArguments) { // here you can provide default error message if validation failed
        return `${validationArguments.property} is not valid`;
    }
}
