type Validator = (value: string) => string | undefined

export const requiredField: Validator = (value) => !value ? 'Field is required' : undefined
export const maxLength = (maxLength: number): Validator => (value) => (value && value.length > maxLength) ? `Max length ${maxLength} symbols` : undefined