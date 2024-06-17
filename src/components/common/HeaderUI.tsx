import { Children, ReactNode } from "react";
import RadixIcon from "@/assets/radix-icon";
import { Button } from "../ui/Button";
import Typography from "../ui/typograpy";

type HeaderProps = {
  children: ReactNode;
};

type PostSaveProps = {
  onSave: () => void;
  onTempSave: () => void;
};

export const Header = ({ children }: HeaderProps) => {
  return <>{children}</>;
};

// * 로고
const LogoAlert = () => {
  return (
    <nav className="flex justify-around sticky top-0 z-50 h-[60px] p-4 pt-2 bg-white shadow-nav-bar">
      <div className="flex items-center justify-between w-full">
        <Typography type="h3" className="text-xl">
          iTIL
        </Typography>
        <div className="flex gap-1">
          <Button size={"icon"} variant={"ghost"}>
            <RadixIcon name="BellIcon" size={20} />
          </Button>
          <Button size={"icon"} variant={"ghost"}>
            <RadixIcon
              name="PaperPlaneIcon"
              size={20}
              className="-rotate-45 -translate-y-0.5"
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

const EditProfile = () => {
  return (
    <nav className="flex justify-around sticky top-0 z-50 h-[60px] px-5 py-4 bg-white shadow-nav-bar">
      <div className="flex items-center justify-between w-[400]">
        <Typography type="h3" className="text-xl">
          프로필 편집
        </Typography>
        <div className="flex gap-1">
          <Button size={"icon"} variant={"ghost"}>
            저장
          </Button>
        </div>
      </div>
    </nav>
  );
};

const LogoHamburgerButton = () => {
  return (
    <nav className="flex justify-around sticky top-0 z-50 h-[60px] px-5 py-4 bg-white shadow-nav-bar">
      <div className="flex items-center justify-between w-full">
        <Typography type="h3" className="text-xl">
          iTIL
        </Typography>
        <div className="flex gap-1">
          <Button size={"icon"} variant={"ghost"}>
            <RadixIcon
              name="RowsIcon"
              size={20}
              className=" -translate-y-0.5"
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

// * 뒤로가기 화살표

const PostSaveButtons = ({ onSave, onTempSave }: PostSaveProps) => {
  return (
    <nav className="flex justify-around sticky top-0 z-50 h-[60px] px-5 py-4 bg-white shadow-nav-bar">
      <div className="flex items-center justify-between w-full">
        <Typography type="h3" className="text-xl">
          <Button size={"icon"} variant={"ghost"}>
            <RadixIcon
              name="ArrowLeftIcon"
              size={20}
              className=" -translate-y-0.5"
            />
          </Button>
        </Typography>
        <div className="flex gap-2">
          <Button variant={"tempSave"} size={"smButton"} onClick={onTempSave}>
            임시저장
          </Button>
          <Button variant={"save"} size={"smButton"} onClick={onSave}>
            저장
          </Button>
        </div>
      </div>
    </nav>
  );
};
const MessageHamburgerButton = (nickname: string) => {
  return (
    <nav className="flex justify-around sticky top-0 z-50 h-[60px] px-5 py-4 bg-white shadow-nav-bar">
      <div className="flex items-center justify-between w-full">
        <Typography type="h3" className="text-xl">
          <Button size={"icon"} variant={"ghost"}>
            <RadixIcon
              name="ArrowLeftIcon"
              size={20}
              className=" -translate-y-0.5"
            />
          </Button>
        </Typography>
        <p>{nickname}</p>
        <Button size={"icon"} variant={"ghost"}>
          <RadixIcon name="RowsIcon" size={20} className=" -translate-y-0.5" />
        </Button>
      </div>
    </nav>
  );
};

Header.Alert = LogoAlert;
Header.HamburgerButton = LogoHamburgerButton;
Header.EditProfile = EditProfile;
Header.NewEditPost = PostSaveButtons;
Header.Message = MessageHamburgerButton;

//주석
// export const MenubarUI = () => {
//   return (
//     <nav className="flex justify-around sticky top-0 z-50 h-[60px] p-4 pt-2 bg-white shadow-nav-bar">
//       <div className="flex items-center justify-between w-full">
//         <Typography type="h3" className="text-xl">
//           iTIL
//         </Typography>
//         <div className="flex gap-1">
//           <Button size={"icon"} variant={"ghost"}>
//             <RadixIcon name="BellIcon" size={20} />
//           </Button>
//           <Button size={"icon"} variant={"ghost"}>
//             <RadixIcon
//               name="PaperPlaneIcon"
//               size={20}
//               className="-rotate-45 -translate-y-0.5"
//             />
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };
