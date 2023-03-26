export function modifiersAsText(modifiers: Record<string, number | number[]>): string {
  return Object.entries(modifiers)
    .map(([key, value]) => {
      if (typeof value === 'number') {
        return modifierAsText(key, value)
      }
      return value.map(singleValue => modifierAsText(key, singleValue)).join(', ')
    })
    .join(', ')
}

function modifierAsText(key: string, value: number) {
  const name = (key.charAt(0).toUpperCase() + key.slice(1)).replace('-', ' ')
  return `${name} ${value >= 0 ? '+' : ''}${value}`
}
