"use client";

// ? sticky를 사용했을 때 children이 height에 꽉 차지 않을 때 bottom이 올라와서 수정. 대신 사용하는 layout에서는 margin-bottom에 bottom nav가 차지하는 만큼 값을 줘야함

import RadixIcon from "@/assets/radix-icon";
import { Button } from "../../ui/Button";
import { useRouter } from "next/navigation";

export default function BottomNavBarUI() {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full max-w-[672px]">
      <nav className="flex justify-around w-full z-50 h-[60px] p-4 pt-2 bg-white shadow-nav-bar">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => router.push("/home")}
        >
          <RadixIcon name="HomeIcon" size={30} />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <RadixIcon name="PlusCircledIcon" size={30} />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => router.push("/mypage")}
        >
          <RadixIcon name="PersonIcon" size={30} />
        </Button>
      </nav>
    </div>
  );
}

// import RadixIcon from '@/assets/radix-icon';
// import { Button } from '../../ui/Button';

// export default function BottomNavBarUI() {
//   return (
//     <nav className='flex justify-around sticky z-50 bottom-0 h-[60px] p-4 pt-2 bg-white shadow-nav-bar'>
//       <Button size={'icon'} variant={'ghost'}>
//         <RadixIcon name='HomeIcon' size={30} />
//       </Button>
//       <Button size={'icon'} variant={'ghost'}>
//         <RadixIcon name='PlusCircledIcon' size={30} />
//       </Button>
//       <Button size={'icon'} variant={'ghost'}>
//         <RadixIcon name='PersonIcon' size={30} />
//       </Button>
//     </nav>
//   );
// }
