import RadixIcon from "@/assets/radix-icon";
import dayjs from "dayjs";
import ko from "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { AvatarUI } from "./AvatarUI";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";

interface IProps {
  nickName: string;
  roleAndLevel: string;
  createdAt: string;
  src: string;
  isComment?: boolean;
  size?: string;
}

export default function AvatarProfileUI({
  nickName,
  roleAndLevel,
  src,
  createdAt,
  isComment,
  size,
}: IProps) {
  dayjs.extend(relativeTime);
  dayjs.locale(ko);
  return (
    <div className="flex justify-left gap-2">
      <AvatarUI src={src} />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Typography type="p" className="text-sm text-gray-600">
            {nickName}
          </Typography>
          <Typography type="p" className="text-xs text-gray-300">
            {dayjs(createdAt).fromNow()}
          </Typography>
        </div>
        <Typography type="p" className="text-sm text-gray-300">
          {roleAndLevel}
        </Typography>
      </div>
      {isComment && (
        <Button>
          <RadixIcon name="DotsVerticalIcon" />
        </Button>
      )}
    </div>
  );
}
