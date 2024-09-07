import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { ISelectItemListType } from '@/shared/types';
import { cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';

interface IProps extends React.ComponentPropsWithoutRef<typeof Select> {
  itemList: ISelectItemListType[];
  label?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const selectVariants = cva('w-[180px] border-grayScale-200', {
  variants: {
    placeholder: {
      false: 'text-grayScale-400',
      true: 'inherit',
    },
  },
  defaultVariants: {
    placeholder: false,
  },
});

const SelectUI = forwardRef<any, IProps>(
  ({ placeholder, label, itemList, onChange, ...props }, ref) => {
    return (
      <Select {...props} onValueChange={onChange}>
        <SelectTrigger
          ref={ref}
          className={selectVariants({ placeholder: !!props.value })}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className='border-grayScale-400'>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {itemList.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className='custom-hover'
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);

SelectUI.displayName = 'SelectUI';

export { SelectUI };
