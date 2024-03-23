import { ReactChildrenType } from '@/types/global';

interface SubtitleAtomPropTypes extends React.HTMLAttributes<HTMLParagraphElement> {
  isSize: string;
  children: ReactChildrenType;
}

export const SubtitleAtom = ({ isSize, children }: SubtitleAtomPropTypes) => {
  return <p className={`subtitle is-${isSize}`}>{children}</p>;
};
