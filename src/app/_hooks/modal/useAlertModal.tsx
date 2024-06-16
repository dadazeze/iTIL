"use client";

import { useEffect, useState } from "react";

export default function useAlertModal() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    console.log("🥦🥦🥦", isAlertOpen);
  }, [isAlertOpen]);

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
