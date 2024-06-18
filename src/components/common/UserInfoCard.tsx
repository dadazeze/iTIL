import { ROLE, LEVEL } from "@/types/enum";
import Image from "next/image";

type Props = {
  userId: string;
  role: ROLE;
  year: LEVEL;
};

export default function UserInfoCard(props: Props) {
  const { userId, role, year } = props;
  return (
    <div>
      <div>
        <Image src={"/"} alt="user profile" />
      </div>
      <div>
        <div>{userId}</div>
        <div>
          <span>{role}/</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}
