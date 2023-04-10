import { useBackgrounds } from './api-hooks'

export function useBackground(id?: string) {
  const { data: backgrounds } = useBackgrounds()
  return backgrounds?.find(background => background.id === id)
}
