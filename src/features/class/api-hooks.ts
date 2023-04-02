import { useAPIQuery } from 'services/api'
import { type Class } from './types'

export function useClasses() {
  return useAPIQuery<Class[]>({ url: '/class/all' })
}
