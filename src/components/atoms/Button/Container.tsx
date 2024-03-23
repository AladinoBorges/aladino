import { ReactChildrenType } from '@/types/global';

interface ButtonsContainerPropTypes {
  children: ReactChildrenType;
}

export const ButtonsContainerAtom = ({ children }: ButtonsContainerPropTypes) => {
  return <div className='buttons'>{children}</div>;
};
