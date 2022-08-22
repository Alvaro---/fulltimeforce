import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useFetchUser } from '../hooks/useFetchUser';

const CardContainer = styled.div`
  ${tw`
        items-center
        flex
        flex-col
        h-auto
        w-2/5
        border-solid
        rounded-2xl
        border-2
        border-indigo-200
    `}
`;

const ImageLogo = styled.img`
  ${tw`
        rounded-full
        m-10
        mb-5
        h-72
        w-72
    `}
`;

const Nombre = styled.h3`
  ${tw`
        font-bold
        m-5
    `}
`;

const Rama = styled.h2`
  ${tw`
        italic
        mb-2
    `}
`;

export const InfoCard = ({ user, rama }) => {
  const { nombre, imagen, htmlLink } = useFetchUser(user);

  return (
    <>
      <CardContainer>
        <ImageLogo src={imagen} />
        <Nombre>
          <a href={htmlLink}>{nombre} </a>
        </Nombre>
        <Rama>Rama: {rama}</Rama>
      </CardContainer>
    </>
  );
};
