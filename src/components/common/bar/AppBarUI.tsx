interface IAppBarProps {
  children: React.ReactNode;
}

export const AppBarUI = ({ children }: IAppBarProps) => {
  return (
    <nav className='flex justify-around sticky top-0 z-50 h-[60px] px-5 py-4 bg-white shadow-nav-bar'>
      <div className='flex items-center justify-between w-full'>{children}</div>
    </nav>
  );
};

const Left = ({ children }: IAppBarProps) => {
  return <div>{children}</div>;
};

const Right = ({ children }: IAppBarProps) => {
  return <div>{children}</div>;
};

const Center = ({ children }: IAppBarProps) => {
  return <div>{children}</div>;
};

AppBarUI.Left = Left;
AppBarUI.Right = Right;
AppBarUI.Center = Center;
