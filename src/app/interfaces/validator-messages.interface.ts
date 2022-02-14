export interface ValidatorMessages {
  validationType: ValidationTypes;
  validationMessage: string;
}

export enum ValidationTypes {
  pattern = 'pattern',
}
