'use client';

import { Button } from '@/components/ui/Button';
import { signInWithGitHub, signOut } from '../../../sign-up/lib/utils';

export default function SignInForm() {
  return (
    <div>
      <Button onClick={() => signInWithGitHub()}>깃헙 로그인</Button>
      <Button onClick={() => signOut()}>로그아웃</Button>
    </div>
  );
}
