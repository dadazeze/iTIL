import { Button } from '@/shared/components/ui/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { ReactNode } from 'react';

interface IProps {
  trigger: ReactNode;
  children: ReactNode;
  title: string;
  confirmBtn?: ReactNode;
  cancelBtn?: ReactNode;
}

const ModalUI = ({
  trigger,
  children,
  title,
  confirmBtn,
  cancelBtn,
}: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {children}
          <DialogFooter>
            <DialogClose asChild>
              {confirmBtn ? confirmBtn : <Button type='button'>확인</Button>}
            </DialogClose>
            <DialogClose asChild>
              {cancelBtn ? cancelBtn : <Button type='button'>취소</Button>}
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ModalUI;
