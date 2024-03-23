import { Dispatch, SetStateAction } from 'react';

interface NavigationBurgerButtonPropTypes {
  controlledList: string;
  setControllerState: Dispatch<SetStateAction<boolean>>;
}

export const NavigationBurgerButtonAtom = ({
  controlledList,
  setControllerState,
}: NavigationBurgerButtonPropTypes) => {
  const handleUpdateState = () => {
    setControllerState((previousValue) => !previousValue);
  };

  return (
    <a
      role='button'
      aria-label='menu'
      aria-expanded='false'
      className='navbar-burger'
      onClick={handleUpdateState}
      data-target={controlledList}
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </a>
  );
};
