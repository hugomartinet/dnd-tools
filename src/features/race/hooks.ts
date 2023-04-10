import { useRaces } from './api-hooks'

export function useRace(id?: string) {
  const { data: races } = useRaces()
  return races?.find(race => race.id === id)
}
