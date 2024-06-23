import { redirect } from "next/navigation";

export default function Main() {
  redirect("/home");
  return null; // test2=3
}
