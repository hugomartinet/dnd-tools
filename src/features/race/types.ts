export interface Race {
  id: string
  name: string
  size: string
  speed: number
  modifiers: Record<string, number | number[]>
  traits: string[]
}
