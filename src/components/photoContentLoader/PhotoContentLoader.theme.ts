import styled from 'styled-components'

export const PhotoContentLoaderStyles = styled.div`
  display: flex;
  width: 35rem;
  flex-direction: column;
  height: 40rem;
  border-radius: 2rem;
  padding: 2rem 0 0 1rem;
  margin: 0 1.5rem 1.5rem 0;
  margin: 2rem 0 0 0;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  object-fit: contain;

  @media (max-width: 460px) {
    width: 100%;
  }
`
