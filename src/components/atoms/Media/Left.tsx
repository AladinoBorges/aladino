import { ReactChildrenType } from '@/types/global';

interface MediaLeftPropTypes {
  children: ReactChildrenType;
}

export const MediaLeftAtom = ({ children }: MediaLeftPropTypes) => {
  return <div className='media-left'>{children}</div>;
};
