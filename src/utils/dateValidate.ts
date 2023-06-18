import { dateRegex } from './regex'

export function dateValidate(date: string) {
  return dateRegex.test(date)
}