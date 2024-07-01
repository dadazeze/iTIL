import { AppBarUI } from './AppBarUI';

interface IProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  center?: React.ReactNode;
}

export const MenuBarUI = ({ left, right, center }: IProps) => {
  return (
    <AppBarUI>
      {left && <AppBarUI.Left>{left}</AppBarUI.Left>}
      {center && <AppBarUI.Center>{center}</AppBarUI.Center>}
      {right && <AppBarUI.Right>{right}</AppBarUI.Right>}
    </AppBarUI>
  );
};
