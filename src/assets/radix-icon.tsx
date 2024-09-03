import { cn } from '@/shared/lib/style/utils';
import * as icons from '@radix-ui/react-icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';

export interface RadixIconProps extends IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

export default function RadixIcon({
  name,
  size = 16,
  color = 'currentColor',
  ...props
}: RadixIconProps) {
  const SelectRadixIcon = icons[name];

  const isClickEvent = !!props.onClick;
  const pointerStyle = isClickEvent ? 'cursor-pointer' : '';

  return (
    <SelectRadixIcon
      width={size}
      height={size}
      className={cn(pointerStyle, props.className)}
      {...props}
      color={color}
    />
  );
}
