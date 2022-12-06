import React from 'react';

import MainStyled from './styles';

import Apresentation from '../components/Apresentation';
import Skills from '../components/Skills';
import About from '../components/About';

export default function Home() {
  return (
    <MainStyled>
        <Apresentation />
        <Skills id="s-skills" />
        <About id="s-about" />
      </MainStyled>
  );
}
