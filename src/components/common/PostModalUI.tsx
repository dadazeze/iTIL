import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@radix-ui/react-dialog";

type Props = {
  open: boolean;
  close: () => void;
};
export default function PostModalUI(props: Props) {
  const { open, close } = props;
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogTrigger asChild>
        <button className="btn">Open Dialog</button>
      </DialogTrigger>
      <DialogContent className="fixed inset-0 flex items-center justify-center bg-white z-[60] bg-level-100">
        <div className="w-full h-full p-4 flex flex-col">
          <DialogTitle className="text-lg font-bold mb-4">
            Full Screen Dialog
          </DialogTitle>
          <DialogDescription className="flex-1 mb-4">
            This is a full screen dialog.
          </DialogDescription>
          {/* 여기에 추가적인 콘텐츠를 넣으세요 */}
          <button className="self-end btn" onClick={() => close()}>
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
