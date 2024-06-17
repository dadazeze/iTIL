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
}

const SelectUI = forwardRef<any, IProps>(
  ({ placeholder, label, itemList, ...props }, ref) => {
    return (
      <Select>
        <SelectTrigger
          ref={ref}
          className='w-[180px] data-[placeholder]:text-gray-300'
          {...props}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {itemList.map((item) => (
              <SelectItem key={item.value} value={item.value}>
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
