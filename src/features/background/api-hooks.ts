import { useAPIQuery } from 'services/api'
import { type Background } from './types'

export function useBackgrounds() {
  return useAPIQuery<Background[]>({ url: '/background/all' })
}
