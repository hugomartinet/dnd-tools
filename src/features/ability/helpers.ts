export function signed(value: number): string {
  return `${value >= 0 ? '+' : ''}${value}`
}

export function getModifier(score: number) {
  return signed(Math.floor((score - 10) / 2))
}
