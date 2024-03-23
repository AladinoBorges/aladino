import { ReactChildrenType } from '@/types/global';

interface NavbarEndContainerPropTypes {
  children: ReactChildrenType;
}

export const NavbarEndContainerAtom = ({ children }: NavbarEndContainerPropTypes) => {
  return <div className='navbar-end'>{children}</div>;
};
