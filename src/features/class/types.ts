export interface Class {
  id: string
  name: string
  hit_dice: number
  proficiencies: string[]
  skills: string[]
  spellcasting_ability?: string
}
