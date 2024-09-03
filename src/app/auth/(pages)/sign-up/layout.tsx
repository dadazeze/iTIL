import AuthAppBarUI from "@/widgets/auth/components/AuthAppBarUI";

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthAppBarUI />
      {children}
    </>
  );
}
