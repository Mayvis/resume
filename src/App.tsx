import { FC } from 'react'
import styled from '@emotion/styled'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RIghtPanel'

const App: FC = () => {
  return (
    <div className='App'>
      <Container>
        <LeftPanel />
        <RightPanel />
      </Container>
    </div>
  )
}

const Container = styled.div`
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`

export default App
