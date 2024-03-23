import { ReactChildren } from '@/types/global';

interface CardHeaderIconPropTypes {
  ariaLabel: string;
  children: ReactChildren;
}

export const CardHeaderIconButtonAtom = ({ ariaLabel, children }: CardHeaderIconPropTypes) => {
  return (
    <button className='card-header-icon' aria-label={ariaLabel}>
      {children}
    </button>
  );
};
