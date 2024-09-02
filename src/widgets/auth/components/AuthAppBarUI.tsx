import RadixIcon from '@/assets/radix-icon';
import { Button } from '@/shared/components/ui/Button';
import Typography from '@/shared/components/ui/typography';
import { useRouter } from 'next/navigation';
import { AppBarUI } from '../../../shared/components/common/bar/AppBarUI';

interface IProps {
  signIn?: boolean;
}

export default function AuthAppBarUI({ signIn }: IProps) {
  const router = useRouter();
  return (
    <AppBarUI>
      <AppBarUI.Left>
        {signIn ? (
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon
              name='ArrowLeftIcon'
              size={20}
              className=' -translate-y-0.5'
              onClick={() => router.back()}
            />
          </Button>
        ) : (
          <></>
        )}
      </AppBarUI.Left>
      <AppBarUI.Center>
        <Typography type='h4'>{signIn ? '로그인' : '추가정보'}</Typography>
      </AppBarUI.Center>
      <AppBarUI.Right>
        <></>
      </AppBarUI.Right>
    </AppBarUI>
  );
}
