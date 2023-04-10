import { useAPIQuery } from 'services/api'
import { type Proficiency } from './types'

export function useProficiencies() {
  return useAPIQuery<Proficiency[]>({ url: '/proficiency/all' })
}
