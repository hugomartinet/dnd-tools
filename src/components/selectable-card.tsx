import { Card, type CardProps } from '@chakra-ui/react'

interface SelectableCardProps extends CardProps {
  selected: boolean
  onSelect: () => void
}

export function SelectableCard({ selected, onSelect, ...props }: SelectableCardProps) {
  return (
    <Card
      {...props}
      margin={1}
      aria-selected={selected}
      _selected={{ margin: 0.75, borderWidth: 3, borderColor: 'blue.500' }}
      cursor="pointer"
      onClick={onSelect}
    />
  )
}
