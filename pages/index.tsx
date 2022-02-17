import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <ScHome>
      hihi
    </ScHome>
  )
}

const ScHome = styled.div`
  min-height: 100vh;
  border: 1px solid red;
`;

export default Home
