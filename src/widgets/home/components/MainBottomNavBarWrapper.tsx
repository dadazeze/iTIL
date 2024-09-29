import { Suspense } from "react";
import { getUserId } from "../lib/utils";
import MainBottomNavBarUI from "./MainBottomNavBarUI";

export default async function MainBottomNavBarWrapper() {
  const userId = await getUserId();

  return (
    <Suspense fallback={<></>}>
      <MainBottomNavBarUI userId={userId ?? ""} />
    </Suspense>
  );
}
