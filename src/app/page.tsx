'use client';
import { HeroHeader } from '@/components/alborsui';
import { PrimaryNavBar } from '@/components/interfaces/PrimaryNavbar';

export default function Home() {
  return (
    <main>
      <PrimaryNavBar />

      <HeroHeader
        title='aladino borges'
        subtitle='engenheiro de software, desenvolvedor web fullstack  e minimalista'
        callToActionClick={() => {}}
        callToActionText={`diga "olá mundo"`}
      />
    </main>
  );
}
