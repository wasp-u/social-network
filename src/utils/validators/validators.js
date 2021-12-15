
export const requiredField = (value) => !value ? 'Field is required' : undefined
export const maxLength = (maxLength) => (value) => (value && value.length > maxLength) ? `Max length ${maxLength} symbols` : undefined