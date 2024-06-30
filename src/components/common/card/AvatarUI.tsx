import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface Props {
  src: string
}

export function AvatarUI({src}: Props) {
  return (
    <Avatar>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
