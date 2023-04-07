export interface CharacterFormValues {
  race?: string
  class?: string
  abilities?: {
    force?: number | null
    dextérité?: number | null
    constitution?: number | null
    intelligence?: number | null
    sagesse?: number | null
    charisme?: number | null
  }
  throws?: (number | null | undefined)[]
}
