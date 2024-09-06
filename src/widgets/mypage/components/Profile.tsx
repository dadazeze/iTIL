import RadixIcon from '@/assets/radix-icon';
import { AvatarUI } from '@/shared/components/common/card/AvatarUI';
import { Button } from '@/shared/components/ui/Button';
import { levelToKor, roleToKor } from '@/shared/lib/utils';
import { IUserProfileView } from '@/widgets/common/types/view';
import Image from 'next/image';
import blogLogo from '../../../../public/icon/blogLogo.svg';

interface IProps {
  profile?: IUserProfileView | null;
}

export default async function Profile({ profile }: IProps) {
  return (
    <div className='w-full px-[31px] pt-4'>
      <div className='flex flex-row gap-8 '>
        <AvatarUI size='l' src={profile!.avatar_url} />
        <div className='flex flex-col'>
          <div className='flex flex-row max-w-80 gap-20'>
            <div className='flex flex-col color'>
              <div>{profile!.username}</div>
              <div className='text-grayScale-500 text-xs'>
                {roleToKor[profile!.role]} / &nbsp;
                {levelToKor[profile!.level]}
              </div>
            </div>
            <div className='flex flex-row gap-1'>
              <Image src={blogLogo} alt='blog logo' className='h-fit' />
              <RadixIcon name='GitHubLogoIcon' size={25} />
            </div>
          </div>
          <div className='flex flex-row gap-[21px] mt-5'>
            <div className='flex flex-row gap-2'>
              <div>팔로워</div>
              <div>821</div>
            </div>
            <div className='flex flex-row gap-2'>
              <div>팔로잉</div>
              <div>48</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-xs mt-5'>Next.js에 관심 많은 2년차 개발자</div>
      <div className='flex flex-row gap-3 my-[20px]'>
        <Button variant='profile'>
          <div>프로필 편집</div>
        </Button>
        <Button variant='profile'>
          <div>프로필 공유</div>
        </Button>
      </div>
    </div>
  );
}
