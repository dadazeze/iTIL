"use client";

import { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Button } from "../ui/Button";
import { DialogHeader } from "../ui/dialog";

type Props = {
  alertContent: string;
  defaultText: string;
  rightText?: string;
  isAlertOpen: boolean;
  onClose: (isDefaultButton: boolean) => void;
  onOpen: () => void;
  isSingleButton: boolean;
};
export default function AlertModalUI(props: Props) {
  const {
    alertContent,
    defaultText,
    rightText,
    isAlertOpen,
    onClose,
    onOpen,
    isSingleButton,
  } = props;
  return (
    <Dialog open={isAlertOpen}>
      <DialogOverlay />
      <DialogContent className="w-[400] h-[400] fixed inset-0 flex items-center justify-center z-[60] ">
        <div className="w-96 h-[400] p-10 flex flex-col gap-5 border border-1 border-disabled">
          <DialogDescription>{alertContent}</DialogDescription>
          <div>
            <Button variant={"default"}>{defaultText}</Button>
            {!isSingleButton && <Button variant={"save"}>{rightText}</Button>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
