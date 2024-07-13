import Card from "./Card";

// TODO: 무한스크롤 구현
export default function Feed() {
  return (
    <>
      <div className="container mx-auto p-0">
        <hr className="h-0.5 border-none bg-grayScale-300" />
        <div className="flex flex-row ml-[16px] my-[6px]">
          <div>April&nbsp;</div>
          <div>2024</div>
        </div>
        <div className="grid grid-cols-5">
          {POSTS.map((src, index) => (
            <Card src={src} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

// TODO: 데이터 들어오면 삭제
const POSTS = [
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-09",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-09",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-08",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-07",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-06",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn2",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-09",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-09",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-08",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-07",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-06",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn2",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-09",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-09",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-08",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-07",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-06",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn2",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-09",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-09",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-08",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-07",
  },
  {
    title: "Vue3",
    keyword: "Vue3",
    Description: "쉽지만 짜증나고 짜증나지만 간편함",
    like: 4,
    bookMark: 0,
    writtenDate: "2024-07-06",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn2",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "Shadcn?",
    keyword: "Shadcn",
    Description: "라이브러리를 사용해보았다.",
    like: 29,
    bookMark: 1,
    writtenDate: "2024-07-05",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-09",
  },
  {
    title: "next.js14 공부",
    keyword: "Next.js",
    Description: "가나다",
    like: 24,
    bookMark: 2,
    writtenDate: "2024-07-09",
  },
];
