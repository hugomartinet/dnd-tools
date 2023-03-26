import { useAPIQuery } from '../../services/api'
import { type Race } from './types'

export function useRaces() {
  return useAPIQuery<Race[]>({ url: '/race/all' })
}
