import { ReactChildrenType } from '@/types/global';

interface NavbarLinkItemPropTypes {
  children: ReactChildrenType;
}

export const NavbarLinkItemAtom = ({ children }: NavbarLinkItemPropTypes) => {
  return <a className='navbar-link'>{children}</a>;
};
