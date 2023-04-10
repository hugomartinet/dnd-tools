import { useClasses } from './api-hooks'

export function useClass(id?: string) {
  const { data: classes } = useClasses()
  return classes?.find(_class => _class.id === id)
}
