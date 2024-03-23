import { ReactChildrenType } from '@/types/global';

interface NavigationBarPropTypes {
  type: string;
  position: string;
  children: ReactChildrenType;
}

export const NavigationBarAtom = ({ type, position, children }: NavigationBarPropTypes) => {
  <nav
    role='navigation'
    aria-label='main navigation'
    className={`navbar is-fixed-${position} is-${type}`}
  >
    {children}
  </nav>;
};
