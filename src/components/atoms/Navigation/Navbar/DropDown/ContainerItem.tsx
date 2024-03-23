import { ReactChildrenType } from '@/types/global';

interface NavbarDropDownContainerItemPropTypes {
  children: ReactChildrenType;
}

export const NavbarDropDownContainerItemAtom = ({
  children,
}: NavbarDropDownContainerItemPropTypes) => {
  return <div className='navbar-item has-dropdown is-hoverable'>{children}</div>;
};
