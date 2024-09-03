"use client";

import { useState } from "react";

export default function usePostModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleModal,
  };
}
