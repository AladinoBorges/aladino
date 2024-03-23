import { NabBar } from '../alborsui';

export const PrimaryNavBar = () => {
  const navigationItems = [
    { label: 'home', link: '/', type: '', priority: '' },
    { label: 'sobre', link: '/about', type: '', priority: '' },
    { label: 'projetos', link: 'projects', type: '', priority: '' },
    { label: 'empresas', link: 'companies', type: '', priority: '' },
    { label: 'contacto', link: 'contact', type: '', priority: '' },
  ];

  const logotype = {
    pathTo: '/',
    alternativeText: 'aladino borges',
    sourceUrl: 'https://bulma.io/images/bulma-logo.png',
  };

  const navigationButtons = [
    { label: 'entrar', link: '/login', type: 'button', priority: 'primary' },
    { label: 'registrar', link: '/registration', type: 'button', priority: 'dark' },
  ];

  return (
    <NabBar
      type='light'
      withLogotype
      position='top'
      logotype={logotype}
      navigationItems={navigationItems}
      navigationButtons={navigationButtons}
    />
  );
};
