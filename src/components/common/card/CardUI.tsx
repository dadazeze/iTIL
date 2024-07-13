import RadixIcon from "@/assets/radix-icon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../../ui/Button";
import Typography from "../../ui/typography";
import AvatarProfileUI from "./AvatarProfileUI";
import { IPostView } from "@/app/home/types/view";

interface IProps {
  item: IPostView;
}

export function CardUI({ item }: IProps) {
  return (
    <Card className="w-full rounded-none">
      <CardHeader>
        <AvatarProfileUI
          src={item.profiles.avatar_url}
          nickName={item.profiles.username}
          roleAndLevel={`${item.profiles.role} / ${item.profiles.level}`}
          createdAt={item.created_at}
        />
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex flex-col">
          <Typography type="h4">{item.title}</Typography>
          <div className="flex items-end">
            <Typography
              type="pre"
              className="pt-4 pb-5 elipsis-3 h-[100px] w-[85%]"
            >
              {item.description}
            </Typography>
            <Link href={"/"} className="underline">
              더보기
            </Link>
          </div>
          <div className="flex justify-between p-3">
            <Typography type="p" className="text-xs">
              좋아요 4
            </Typography>
            <Typography type="p" className="text-xs">
              {item.count}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-around pb-1 pt-1 bg-grayScale-100 mt-2">
        <Button size={"icon"} variant={"ghost"}>
          <RadixIcon name="HeartIcon" size={20} />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <RadixIcon name="ChatBubbleIcon" size={20} />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <RadixIcon name="BookmarkIcon" size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
}
