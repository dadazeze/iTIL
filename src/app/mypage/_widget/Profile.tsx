import Image from "next/image";
import RadixIcon from "@/assets/radix-icon";
import { AvatarUI } from "@/components/common/card/AvatarUI";
import blogLogo from "../../../../public/icon/blogLogo.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/Button";

export default function Profile() {
  return (
    <div className="w-full px-[31px] pt-4">
      <div className="flex flex-row gap-8 ">
        <AvatarUI
          size="l"
          src="https://i.pinimg.com/564x/96/c8/07/96c8074f92e3e53b5fbc0d6adc7e96fd.jpg"
        />
        <div className="flex flex-col">
          <div className="flex flex-row max-w-80 gap-20">
            <div className="flex flex-col color">
              <div>dev_dab</div>
              <div className="text-grayScale-500 text-xs">프론트엔드/2년차</div>
            </div>
            <div className="flex flex-row gap-1">
              <Image src={blogLogo} alt="blog logo" className="h-fit" />
              <RadixIcon name="GitHubLogoIcon" size={25} />
            </div>
          </div>
          <div className="flex flex-row gap-[21px] mt-5">
            <div>
              <span>팔로워</span>
              <span>821</span>
            </div>
            <div>
              <span>팔로잉</span>
              <span>48</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs mt-5">Next.js에 관심 많은 2년차 개발자</div>
      <div className="flex flex-row gap-3 my-[20px]">
        <Button variant="profile">
          <div>프로필 편집</div>
        </Button>
        <Button variant="profile">
          <div>프로필 공유</div>
        </Button>
      </div>
    </div>
  );
}
