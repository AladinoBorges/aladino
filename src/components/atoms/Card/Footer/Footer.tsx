import { ReactChildren } from '@/types/global';

interface CardFooterPropTypes {
  children: ReactChildren;
}

export const CardFooterAtom = ({ children }: CardFooterPropTypes) => {
  return <footer className='card-footer'>{children}</footer>;
};
