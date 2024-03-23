import { Button } from '../alborsui';

interface HeroPropTypes {
  title: string;
  subtitle: string;
  callToActionText: string;
  callToActionClick: () => any;
}

export const HeroHeader = ({
  title,
  subtitle,
  callToActionText,
  callToActionClick,
}: HeroPropTypes) => {
  return (
    <section className='hero is-medium is-primary'>
      <div className='hero-body'>
        <h1 className='title is-2'>{title}</h1>

        <p className='subtitle is-4'>{subtitle}</p>

        <Button
          type='button'
          category='dark'
          onClick={callToActionClick}
          className='is-outlined is-rounded'
        >
          {callToActionText}
        </Button>
      </div>
    </section>
  );
};
