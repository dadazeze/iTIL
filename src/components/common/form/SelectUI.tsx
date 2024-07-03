import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ISelectItemListType } from '@/types';
import React, { forwardRef } from 'react';

interface IProps extends React.ComponentPropsWithoutRef<typeof Select> {
  itemList: ISelectItemListType[];
  label?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const SelectUI = forwardRef<any, IProps>(
  ({ placeholder, label, itemList, onChange, ...props }, ref) => {
    return (
      <Select {...props} onValueChange={onChange}>
        <SelectTrigger
          // ref={ref}
          className='w-[180px] data-[placeholder]:text-gray-300'
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
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
