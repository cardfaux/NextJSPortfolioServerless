import Link from 'next/link';
import styled from 'styled-components';

export default function FourOhFour() {
  return (
    <StyledContainer>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>
        <a>Go back home</a>
      </Link>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
