import { Image } from '@chakra-ui/react'
import { type Race } from '../types'

interface RaceImageProps {
  race: Race
}

export function RaceImage({ race }: RaceImageProps) {
  return <Image src={require(`../assets/${race.id}.png`)} boxSize={16} rounded="md" />
}
