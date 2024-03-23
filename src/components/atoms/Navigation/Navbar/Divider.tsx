import { ReactChildrenType } from '@/types/global';

interface NavbarDividerPropTypes {
  children: ReactChildrenType;
}

export const NavbarDividerAtom = ({ children }: NavbarDividerPropTypes) => {
  return <hr className='navbar-divider'></hr>;
};
