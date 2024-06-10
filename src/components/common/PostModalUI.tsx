import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { MenubarUI } from "./MenuBarUI";

type Props = {
  open: boolean;
  close: () => void;
};
export default function PostModalUI(props: Props) {
  const { open, close } = props;
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="fixed inset-0 flex items-center justify-center z-[60] bg-white">
        <div className="w-full h-full p-4 flex flex-col">
          <MenubarUI />
          <DialogTitle className="text-lg font-bold mb-4 mt-[24]">
            <div className="border-b-2">
              <input
                type="text"
                placeholder="제목을 입력하세요"
                className="py-2 px-5 outline-none font-normal"
              />
            </div>
            <div className="border-b-2  mt-5">
              <input
                type="text"
                placeholder="#대표 키워드 (i.g #Nextjs)"
                className="py-2 px-5 outline-none font-normal"
              />
            </div>
          </DialogTitle>
          <DialogDescription className="flex-1 mb-4">
            <textarea
              className="w-full h-full p-4 outline-none resize-none"
              placeholder="오늘 공부한 내용을 작성하세요. 단 한줄도 괜찮아요 :)"
            />
          </DialogDescription>
          <button className="self-end btn" onClick={() => close()}>
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
