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

interface IProps {
  itemList: ISelectItemListType[];
  label?: string;
  placeholder: string;
}

export function SelectUI({ placeholder, label, itemList }: IProps) {
  return (
    <Select>
      <SelectTrigger className='w-[180px] data-[placeholder]:text-gray-300'>
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
