import styled from '@emotion/styled'
import { FC } from 'react'
import Title from './Title'
import ResumeTitle from './ResumeTitle'
import Experience from './Experience'
import Reference from './Reference'

const RightPanel: FC = () => {
  return (
    <Wrapper>
      <ResumeTitle />
      <Title color='black' text='Experience' />
      <Experience />
      <Title color='black' text='Reference' />
      <Reference />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: calc(100% - 328px);
  padding: 0 24px;
`

export default RightPanel
