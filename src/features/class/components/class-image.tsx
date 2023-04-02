import { Image } from '@chakra-ui/react'
import { type Class } from '../types'

interface ClassImageProps {
  _class: Class
}

export function ClassImage({ _class }: ClassImageProps) {
  return <Image src={require(`../assets/${_class.id}.jpeg`)} boxSize={16} rounded="md" />
}
