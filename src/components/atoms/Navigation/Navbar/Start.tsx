import { ReactChildrenType } from '@/types/global';

interface NavbarStartContainerPropTypes {
  children: ReactChildrenType;
}

export const NavbarStartContainerAtom = ({ children }: NavbarStartContainerPropTypes) => {
  return <div className='navbar-start'>{children}</div>;
};
