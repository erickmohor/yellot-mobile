export function removeSecondsFromTime(time: string) {
  return time.replace('00:00', '00')
}