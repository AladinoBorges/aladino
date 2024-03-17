import { alborsui } from '../alborsui';

interface PropTypes {
  title: string;
  subtitle: string;
  callToActionText: string;
  callToActionClick: () => void
};

export const HeroHeader = ({ title, subtitle, callToActionText, callToActionClick }: PropTypes) => {
  return (
    <section className="hero is-medium is-primary">
      <div className='hero-body'>
        <h1 className="title is-1">{title}</h1>

        <p className="subtitle is-3">{subtitle}</p>

        <alborsui.Button
          type="button"
          category='dark'
          onClick={callToActionClick}
          className="is-outlined is-rounded"
        >
          {callToActionText}
        </alborsui.Button>
      </div>
      </section>
  );
};
