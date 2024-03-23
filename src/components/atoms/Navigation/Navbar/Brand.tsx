import { ReactChildrenType } from '@/types/global';

interface NavigationBarBrandPropTypes {
  children: ReactChildrenType;
}

export const NavigationBarBrandContainerAtom = ({ children }: NavigationBarBrandPropTypes) => {
  <div className='navbar-brand'>{children}</div>;
};
