import { hourRegex } from './regex'

export function timeValidate(time: string) {
  return hourRegex.test(time)
}