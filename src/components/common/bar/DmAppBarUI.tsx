import Typography from "@/components/ui/typography";
import { AppBarUI } from "./AppBarUI";
import { Button } from "@/components/ui/Button";
import RadixIcon from "@/assets/radix-icon";
import { DialogClose } from "@/components/ui/dialog";
interface Props {
  userId: string;
}

export const DmAppBar = ({ userId }: Props) => {
  return (
    <AppBarUI>
      <AppBarUI.Left>
        <DialogClose asChild>
          <RadixIcon
            name="ArrowLeftIcon"
            size={20}
            className=" -translate-y-0.5 cursor-pointer"
          />
        </DialogClose>
      </AppBarUI.Left>
      <AppBarUI.Center>{userId}</AppBarUI.Center>
      <AppBarUI.Right>
        <div className="flex gap-1">
          <Button size={"icon"} variant={"ghost"}>
            <RadixIcon name="HamburgerMenuIcon" size={20} />
          </Button>
        </div>
      </AppBarUI.Right>
    </AppBarUI>
  );
};
