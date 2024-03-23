import { ReactChildrenType } from '@/types/global';

interface MediaContentAtomPropTypes {
  children: ReactChildrenType;
}

export const MediaContentAtom = ({ children }: MediaContentAtomPropTypes) => {
  return <div className='media-content'>{children}</div>;
};
