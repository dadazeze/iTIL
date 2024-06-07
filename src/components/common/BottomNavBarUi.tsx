import RadixIcon from "@/assets/radix-icon";
import { Button } from "../ui/Button";

export default function BottomNavBarUI() {
  return (<nav className="flex justify-around sticky bottom-0 h-[60px] p-4 pt-2 bg-white shadow-md">
    <Button size={'icon'} variant={'ghost'}>
      <RadixIcon name="HomeIcon" size={30} />
    </Button>
    <Button size={'icon'} variant={'ghost'}>
      <RadixIcon name="PlusCircledIcon" size={30} />
    </Button>
    <Button size={'icon'} variant={'ghost'}>
      <RadixIcon name="PersonIcon" size={30} />
    </Button>
  </nav>)
}