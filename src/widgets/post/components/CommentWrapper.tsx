import Typography from "@/shared/components/ui/typography";
import React from "react";

interface IProps {
  children: React.ReactNode;
  len: number;
}

export default function CommentWrapper({ len, children }: IProps) {
  return (
    <section className="bg-white">
      <Typography className="indent-5 pt-2.5 pb-6 font-semibold">
        댓글 {len}
      </Typography>
      {children}
    </section>
  );
}
