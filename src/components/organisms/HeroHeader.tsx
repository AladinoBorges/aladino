import { ButtonAtom } from '../alborsui';

interface HeroOrganismPropTypes {
  title: string;
  subtitle: string;
  callToActionText: string;
  callToActionClick: () => any;
}

export const HeroHeaderOrganism = ({
  title,
  subtitle,
  callToActionText,
  callToActionClick,
}: HeroOrganismPropTypes) => {
  return (
    <section className='hero is-medium is-primary'>
      <div className='hero-body'>
        <h1 className='title is-2'>{title}</h1>

        <p className='subtitle is-4'>{subtitle}</p>

        <ButtonAtom
          type='button'
          category='dark'
          onClick={callToActionClick}
          className='is-outlined is-rounded'
        >
          {callToActionText}
        </ButtonAtom>
      </div>
    </section>
  );
};
