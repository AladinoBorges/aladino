import { ReactChildrenType } from '@/types/global';

interface CardHeaderIconPropTypes {
  ariaLabel: string;
  children: ReactChildrenType;
}

export const CardHeaderIconButtonAtom = ({ ariaLabel, children }: CardHeaderIconPropTypes) => {
  return (
    <button className='card-header-icon' aria-label={ariaLabel}>
      {children}
    </button>
  );
};
