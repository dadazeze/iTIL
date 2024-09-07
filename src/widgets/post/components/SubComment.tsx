import RadixIcon from "@/assets/radix-icon";
import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/style/utils";
import { levelToKor, roleToKor } from "@/shared/lib/utils";
import AvatarProfileUI from "../../../shared/components/common/card/AvatarProfileUI";
import Typography from "../../../shared/components/ui/typography";
import { ISubCommentView } from "../../common/types/view";
import CommentDropdownUI from "./CommentDropdownUI";

interface IProps {
  className?: string;
  item: ISubCommentView;
  index: number;
}

export function SubComment({ className, item, index }: IProps) {
  return (
    <div className={cn("grid grid-cols-[40px_45px_1fr]", className)}>
      <RadixIcon name="CornerBottomLeftIcon" size={20} className={index !== 0 ? 'invisible' : ''} />
      <div className="col-span-2 flex justify-between mb-1.5">
        <AvatarProfileUI
          src={item.profiles.avatar_url}
          nickName={item.profiles.username}
          roleAndLevel={`${roleToKor[item.profiles.role]} / ${
            levelToKor[item.profiles.level]
          }`}
          createdAt={item.created_at}
          className=""
        />
        <CommentDropdownUI />
      </div>
      <Card className="col-start-3 mr-6 border-grayScale-300 mb-3.5">
        <Typography className="p-2.5">{item.content}</Typography>
      </Card>
    </div>
  );
}

export default SubComment;
