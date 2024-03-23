import { ReactChildrenType } from '@/types/global';

interface NavbarMenuPropTypes {
  id: string;
  controllerState: boolean;
  children: ReactChildrenType;
}

export const NavbarMenuAtom = ({ children, controllerState }: NavbarMenuPropTypes) => {
  return (
    <div id='navbarOptionsList' className={`navbar-menu ${controllerState ? 'is-active' : ''}`}>
      {children}
    </div>
  );
};
