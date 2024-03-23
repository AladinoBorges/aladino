import { ReactChildrenType } from '@/types/global';
import { AnchorHTMLAttributes } from 'react';

interface NavbarAnchorButtonItemPropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: string;
  priority: string;
  children: ReactChildrenType;
}

export const NavbarAnchorButtonItemAtom = ({
  type,
  priority,
  children,
  ...props
}: NavbarAnchorButtonItemPropTypes) => {
  return (
    <a {...props} className={`${type} is-${priority}`}>
      {children}
    </a>
  );
};
