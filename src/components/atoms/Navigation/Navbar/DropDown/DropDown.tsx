import { ReactChildrenType } from '@/types/global';

interface NavbarDropDownPropTypes {
  children: ReactChildrenType;
}

export const NavbarDropDownAtom = ({ children }: NavbarDropDownPropTypes) => {
  return <div className='navbar-dropdown is-hoverable'>{children}</div>;
};
