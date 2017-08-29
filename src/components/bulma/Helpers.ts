export type Size = 'small' | 'medium' | 'large'

export const getSize = (size: Size): string => `is-${size}`
