'use client';
import { HeroHeaderOrganism } from '@/components/alborsui';
import { PrimaryNavBar } from '@/components/interfaces/PrimaryNavbar';

export default function Home() {
  return (
    <main>
      <PrimaryNavBar />

      <HeroHeaderOrganism
        title='aladino borges'
        callToActionClick={() => {}}
        callToActionText={`diga "olá mundo"`}
        subtitle='engenheiro de software, desenvolvedor web fullstack  e minimalista'
      />
    </main>
  );
}
