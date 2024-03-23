import { ReactChildrenType } from '@/types/global';
import { AnchorHTMLAttributes } from 'react';

interface NavbarAnchorItemPropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactChildrenType;
}

export const NavbarAnchorItemAtom = ({ children, ...props }: NavbarAnchorItemPropTypes) => {
  return (
    <a {...props} className='navbar-item'>
      {children}
    </a>
  );
};
