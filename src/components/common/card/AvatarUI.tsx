import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/style/utils";
import { forwardRef } from "react";

const buttonVariants = cva("", {
  variants: {
    size: {
      s: "w-10 h-10",
      m: "w-16 h-16",
      l: "w-20 h-20",
    },
  },
  defaultVariants: {
    size: "s",
  },
});

export interface IProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof buttonVariants> {
  src: string;
}

export function AvatarUI({ className, src = "s", size, ...props }: IProps) {
  return (
    <Avatar className={cn(buttonVariants({ size }))} {...props}>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
