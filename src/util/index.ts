//YYYY-MM-DD 형식의 날짜 데이터
import dayjs from "dayjs";

// TODO: api로 들어오는 날짜 형식에따라 year, month 두개 인자로 받을지 체크
export const getDaysInMonth = (yearMonth: string) => {
  // yearMonth: "2024-7"
  const lastDayOfJuly2024 = dayjs(yearMonth).endOf("month").date();
  console.log(`2024년 7월은 ${lastDayOfJuly2024}일이 있습니다.`);
};
