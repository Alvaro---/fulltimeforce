import styled from 'styled-components';
import tw from 'twin.macro';
import { useFetchBranches } from '../hooks/useFetchBranches';

const Title = styled.h4`
  ${tw`
        font-bold
        m-5
    `}
`;

const ContainerList = styled.ul`
  ${tw`
        w-80
        list-decimal
        border border-indigo-200
    `}
`;

const Item = styled.li`
  width: inherit;
  ${tw`
        pt-3
        pb-3
        pr-3
        text-center
        m-5
        border border-indigo-200
        ease-linear
        hover:bg-indigo-400
    `}
`;

export const CommitsList = ({ user, rama }) => {
  const { commits, isLoading } = useFetchBranches(user, rama);

  return (
    <>
      <Title>Commits</Title>
      <ContainerList>
        {isLoading && <p>Loading Data...</p>}
        {[...commits].reverse().map((commit) => (
          <Item key={commit.id}>
            <a href={commit.url}> {commit.message}</a>
          </Item>
        ))}
      </ContainerList>
    </>
  );
};
