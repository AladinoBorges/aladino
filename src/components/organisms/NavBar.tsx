'use client';
import Image from 'next/image';
import { useState } from 'react';

type NavbarItems = {
  label: string;
  link: string;
  type?: string;
  priority?: string;
};

interface NavBarOrganismPropTypes {
  type: string;
  position: string;
  withLogotype: boolean;
  logotype: {
    sourceUrl: string;
    pathTo: string;
    alternativeText: string;
  };
  navigationItems: NavbarItems[];
  navigationButtons?: NavbarItems[];
}

export const NabBarOrganism = ({
  type,
  position,
  logotype,
  withLogotype,
  navigationItems,
  navigationButtons,
}: NavBarOrganismPropTypes) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <nav
      role='navigation'
      aria-label='main navigation'
      className={`navbar is-fixed-${position} is-${type}`}
    >
      <div className='navbar-brand'>
        {withLogotype ? (
          <a href={logotype?.pathTo} className='navbar-item'>
            <Image
              width={112}
              height={28}
              src={logotype?.sourceUrl}
              alt={logotype?.alternativeText}
            />
          </a>
        ) : null}

        <a
          role='button'
          aria-label='menu'
          aria-expanded='false'
          className='navbar-burger'
          data-target='navbarOptionsList'
          onClick={() => setShowNavbar((previousValue) => !previousValue)}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarOptionsList' className={`navbar-menu ${showNavbar ? 'is-active' : ''}`}>
        <div className='navbar-start'>
          {navigationItems?.map((navigationItem, index) => (
            <a
              key={`navigation-item-${index + 1}`}
              className='navbar-item'
              href={navigationItem.link}
            >
              {navigationItem.label}
            </a>
          ))}
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              {navigationButtons?.map((navigationButtonItem, index) => (
                <a
                  href={navigationButtonItem.link}
                  key={`navigation-button-${index + 1}`}
                  className={`${navigationButtonItem.type} is-${navigationButtonItem.priority}`}
                >
                  {navigationButtonItem.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
