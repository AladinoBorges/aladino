import { alborsui } from '@/components/alborsui';

export default function Home() {
  return (
    <main>
      <section className="hero is-medium is-primary">
      <div className='hero-body'>
        <h1 className="title is-1"><span>aladino</span> <span>borges</span></h1>

        <p className="subtitle is-3">
          <span>engenheiro de software</span>, <span>desenvolvedor web fullstack</span> e <span>minimalista</span>
        </p>

        <alborsui.Button category='dark' className="is-outlined is-rounded" type="button">
          {`diga "olá mundo"`}
        </alborsui.Button>
      </div>
      </section>
    </main>
  );
}
