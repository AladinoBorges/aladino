import { ReactChildrenType } from '@/types/global';

interface CardFooterPropTypes {
  children: ReactChildrenType;
}

export const CardFooterAtom = ({ children }: CardFooterPropTypes) => {
  return <footer className='card-footer'>{children}</footer>;
};
