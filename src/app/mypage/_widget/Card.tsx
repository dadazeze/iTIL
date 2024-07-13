interface Props {
  src: SourceProps;
  index: number;
}

interface SourceProps {
  title: string;
  keyword: string;
  Description: string;
  like: number;
  bookMark: number;
  writtenDate: string;
}
export default function Card({ src, index }: Props) {
  return (
    <div
      key={`${src.title}-${index}`}
      className="relative w-full aspect-square bg-level-100 flex items-center justify-center text-xs"
    >
      {src.keyword}
    </div>
  );
}
