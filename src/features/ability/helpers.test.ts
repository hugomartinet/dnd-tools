/* eslint-disable max-len */
import { getModifier } from './helpers'

describe('getModifier()', () => {
  it.each`
    score | modifier
    ${3}  | ${'-4'}
    ${4}  | ${'-3'}
    ${5}  | ${'-3'}
    ${6}  | ${'-2'}
    ${7}  | ${'-2'}
    ${8}  | ${'-1'}
    ${9}  | ${'-1'}
    ${10} | ${'+0'}
    ${11} | ${'+0'}
    ${12} | ${'+1'}
    ${13} | ${'+1'}
    ${14} | ${'+2'}
    ${15} | ${'+2'}
    ${16} | ${'+3'}
    ${17} | ${'+3'}
    ${18} | ${'+4'}
  `('returns $modifier for score $score', ({ score, modifier }) => {
    expect(getModifier(score)).toEqual(modifier)
  })
})
