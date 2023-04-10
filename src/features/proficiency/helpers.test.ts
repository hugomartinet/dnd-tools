import { getInputPropsFromInstruction } from './helpers'

const proficiencies = [
  { id: 'compétence:acrobaties', name: 'Acrobaties', category: 'compétence' },
  { id: 'compétence:arcanes', name: 'Arcanes', category: 'compétence' },
  { id: 'jeu:dés', name: 'Dés', category: 'jeu' },
  { id: 'jeu:cartes', name: 'Jeu de cartes', category: 'jeu' },
  { id: 'jeu:dragons', name: 'Jeu des Dragons', category: 'jeu' },
  { id: 'véhicule:terrestre', name: 'Arcanes', category: 'véhicule' },
]

describe('getInputPropsFromInstruction()', () => {
  it('returns input props', () => {
    expect(getInputPropsFromInstruction('compétence:au-choix', proficiencies)).toEqual({
      category: 'compétence',
      options: [
        { value: 'compétence:acrobaties', label: 'Acrobaties' },
        { value: 'compétence:arcanes', label: 'Arcanes' },
      ],
    })
  })

  it('restricts options to one value if value is imposed', () => {
    expect(getInputPropsFromInstruction('jeu:cartes', proficiencies)).toEqual({
      category: 'jeu',
      options: [{ value: 'jeu:cartes', label: 'Jeu de cartes' }],
    })
  })

  it('uses | operator to restrict options', () => {
    expect(getInputPropsFromInstruction('jeu:dés|jeu:cartes', proficiencies)).toEqual({
      category: 'jeu',
      options: [
        { value: 'jeu:dés', label: 'Dés' },
        { value: 'jeu:cartes', label: 'Jeu de cartes' },
      ],
    })
  })

  it('uses | operator to handle multiple categories', () => {
    expect(getInputPropsFromInstruction('compétence:au-choix|jeu:au-choix', proficiencies)).toEqual({
      category: 'autre',
      options: [
        { value: 'compétence:acrobaties', label: 'Acrobaties' },
        { value: 'compétence:arcanes', label: 'Arcanes' },
        { value: 'jeu:dés', label: 'Dés' },
        { value: 'jeu:cartes', label: 'Jeu de cartes' },
        { value: 'jeu:dragons', label: 'Jeu des Dragons' },
      ],
    })
  })
})
