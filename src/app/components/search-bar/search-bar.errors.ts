import {
  ValidationTypes,
  ValidatorMessages,
} from 'src/app/interfaces/validator-messages.interface';

export const SearchBarValidationMessages: ValidatorMessages[] = [
  {
    validationType: ValidationTypes.pattern,
    validationMessage: "Sorry, we don't do that here!",
  },
];
