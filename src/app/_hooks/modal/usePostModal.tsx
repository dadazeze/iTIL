"use client";

import { useState } from "react";

export default function NewPost() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleModal,
  };
}
