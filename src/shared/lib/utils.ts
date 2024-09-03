export const removeHTMLTag = (text: string) => {
    return text.replace(/<[^>]+>/g, '');
}
import dayjs from 'dayjs';

export const roleToKor: { [key: string]: string } = {
  FE: '프론트엔드',
  BE: '백엔드',
  FULL: '풀스택',
  AI: 'AI',
  GAME: '게임',
  MOBILE: '모바일',
  QA: 'QA',
};

export const levelToKor: { [key: string]: string } = {
  APPLICANT: '취준',
  ENTRY: '신입',
  ONE_YEAR: '1년차',
  TWO_YEAR: '2년차',
  THREE_YEAR: '3년차',
  FOUR_YEAR: '4년차',
  FIVE_YEAR: '5년차',
  SIX_YEAR: '6년차',
  SEVEN_YEAR: '7년차',
  EIGHT_YEAR: '8년차',
  NINE_YEAR: '9년차',
  TEN_YEAR: '10년차',
};

export const getIsOverflow = (element: HTMLElement | null) => {
  if (!element) return false;
  return element.scrollHeight > element.clientHeight;
};

//YYYY-MM-DD 형식의 날짜 데이터

// TODO: api로 들어오는 날짜 형식에따라 year, month 두개 인자로 받을지 체크
export const getDaysInMonth = (yearMonth: string) => {
  // yearMonth: "2024-7"
  const lastDayOfJuly2024 = dayjs(yearMonth).endOf('month').date();
  return lastDayOfJuly2024;
};
