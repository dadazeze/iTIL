"use client";

import { useState } from "react";

export default function useAlertModal() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onClose = (isDefaultButton: boolean) => {
    setIsAlertOpen(false);
    if (!isDefaultButton) {
      //api 통신: POST
    }
  };

  const onOpen = () => {
    setIsAlertOpen(true);
  };

  return {
    isAlertOpen,
    onClose,
    onOpen,
  };
}
