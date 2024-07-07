import Image from "next/image";
import RadixIcon from "@/assets/radix-icon";
import { AvatarUI } from "@/components/common/card/AvatarUI";
import blogLogo from "../../../../public/icon/blogLogo.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Profile() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <AvatarUI
          size="l"
          src="https://i.pinimg.com/564x/96/c8/07/96c8074f92e3e53b5fbc0d6adc7e96fd.jpg"
        />
        <div className="flex flex-col">
          <div className="flex flex-row max-w-80">
            <div>dev_dab</div>
            <div className="flex flex-row gap-1">
              <Image src={blogLogo} alt="blog logo" />
              <RadixIcon name="GitHubLogoIcon" size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
