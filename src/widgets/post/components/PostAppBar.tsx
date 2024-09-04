'use client';

import RadixIcon from '@/assets/radix-icon';
import { AppBarUI } from '@/shared/components/common/bar/AppBarUI';
import { Button } from '@/shared/components/ui/Button';
import Typography from '@/shared/components/ui/typography';
import { useRouter } from 'next/navigation';

interface IProps {
  postKeyword: string;
}

export const PostAppBar = ({ postKeyword }: IProps) => {
  const router = useRouter();

  return (
    <AppBarUI>
      <AppBarUI.Left>
        <Button size={'icon'} variant={'ghost'}>
          <RadixIcon
            name='ArrowLeftIcon'
            size={20}
            className='-translate-y-0.5'
            onClick={() => router.back()}
          />
        </Button>
      </AppBarUI.Left>
      <AppBarUI.Center>
        <Typography type='h4'>{postKeyword}</Typography>
      </AppBarUI.Center>
      <AppBarUI.Right>
        <></>
      </AppBarUI.Right>
    </AppBarUI>
  );
};
