"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { signInWithGitHub } from "../../../sign-up/lib/utils";

export default function SignInForm() {
  return (
    <div>
      <Button variant={"outline"} onClick={() => signInWithGitHub()} className="flex gap-2">
        <Image
          src="/github@2x.svg"
          alt="GitHub"
          width={20}
          height={20}
        />
        깃헙 로그인
      </Button>
    </div>
  );
}
