import { type Ability } from 'features/ability/types'

export interface Race {
  id: string
  name: string
  size: string
  speed: number
  modifiers: Partial<Record<Ability, number> & { 'au-choix': number[] }>
  traits: string[]
}
