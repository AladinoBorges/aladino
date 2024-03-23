import { ReactChildrenType } from '@/types/global';

interface ContentContainerPropTypes {
  children: ReactChildrenType;
}

export const ContentContainerAtom = ({ children }: ContentContainerPropTypes) => {
  return <div className='content'>{children}</div>;
};
