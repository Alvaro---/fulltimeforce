import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import { InfoCard } from './components/InfoCard';
import { CommitsList } from './components/CommitsList';
import { useState } from 'react';

const USER_NAME = 'Alvaro---';
const BRANCH_NAME = 'fulltimeforce';

const AppContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const Title = styled.h3`
  ${tw`
        text-xl
        font-bold
        text-black
        m-1
        mt-10
    `}
`;

function App() {
  const [user] = useState(USER_NAME);
  const [rama] = useState(BRANCH_NAME);

  return (
    <AppContainer>
      <Title>GitHub API - Take Home Test</Title>
      <InfoCard user={user} rama={rama} />
      <CommitsList user={user} rama={rama} />
    </AppContainer>
  );
}

export default App;
