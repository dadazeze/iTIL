import Typography from "@/components/ui/typography";
import { AppBarUI } from "./AppBarUI";
import { Button } from "@/components/ui/Button";
import RadixIcon from "@/assets/radix-icon";
import { DialogClose } from "@/components/ui/dialog";

export const PostAppBarUI = () => {
  const onSave = () => {
    console.log("저장");
  };

  const onTempSave = () => {
    console.log("임시저장");
  };

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
      <AppBarUI.Right>
        <div className="flex gap-1">
          <DialogClose asChild>
            <Button variant={"tempSave"} size={"smButton"} onClick={onTempSave}>
              임시저장
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={"save"} size={"smButton"} onClick={onSave} type="submit">
              저장
            </Button>
          </DialogClose>
        </div>
      </AppBarUI.Right>
    </AppBarUI>
  );
};
