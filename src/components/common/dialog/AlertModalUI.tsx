"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Button } from "../../ui/Button";
import { DialogHeader } from "../../ui/dialog";

type Props = {
  alertContent: string;
  defaultText: string;
  rightText?: string;
  isAlertOpen: boolean;
  onClose: (isDefaultButton: boolean) => void;
  onOpen: () => void;
  isSingleButton: boolean;
  onClosePost: () => void;
};
export default function AlertModalUI(props: Props) {
  const {
    alertContent,
    defaultText,
    rightText,
    isAlertOpen,
    onClose,
    onClosePost,
    isSingleButton,
  } = props;
  return (
    <Dialog open={isAlertOpen}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 w-full h-full z-[60]" />
      <DialogContent className="fixed inset-0 flex items-center justify-center z-[60]">
        <div className="w-80 h-48 items-center px-10 pt-16 pb-9 flex flex-col gap-5 border border-1 border-grayScale-400 rounded-md bg-white">
          <DialogDescription className="text-center">
            {alertContent}
          </DialogDescription>
          <div className="text-center flex gap-2">
            <Button variant={"alertDefault"} onClick={() => onClose(true)}>
              {defaultText}
            </Button>
            {!isSingleButton && (
              <Button
                variant={"alertRight"}
                onClick={() => {
                  onClose(false);
                  onClosePost();
                }}
              >
                {rightText}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
