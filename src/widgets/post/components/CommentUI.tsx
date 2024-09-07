import RadixIcon from "@/assets/radix-icon";
import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/card";
import { levelToKor, roleToKor } from "@/shared/lib/utils";
import { getSubCommentList } from "@/shared/services/comment";
import AvatarProfileUI from "../../../shared/components/common/card/AvatarProfileUI";
import Typography from "../../../shared/components/ui/typography";
import { ICommentView } from "../../common/types/view";
import SubComment from "./SubComment";
import CommentDropdownUI from "./CommentDropdownUI";

interface IProps {
  item: ICommentView;
}

export default async function CommentUI({ item }: IProps) {
  const subCommentList = await getSubCommentList(item.id);
  const handleSubCommentClick = () => {};
  return (
    <article className="grid grid-cols-[65px_1fr]">
      <div className="col-start-1 col-end-3 flex justify-between pl-5 mb-1.5">
        <AvatarProfileUI
          src={item.profiles.avatar_url}
          nickName={item.profiles.username}
          roleAndLevel={`${roleToKor[item.profiles.role]} / ${
            levelToKor[item.profiles.level]
          }`}
          createdAt={item.created_at}
        />
        <CommentDropdownUI />
      </div>
      <Card className="col-start-2 mr-6 border-grayScale-300 mb-3.5">
        <Typography className="p-2.5">{item.content}</Typography>
      </Card>
      {subCommentList.map((item, index) => (
        <SubComment item={item} key={item.id} index={index} className="col-start-2" />
      ))}
    </article>
  );
}
