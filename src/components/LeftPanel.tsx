import styled from '@emotion/styled'
import { FC } from 'react'
import Avatar from './Avatar'
import ContactDetail from './ContactDetail'
import Education from './Education'
import Expertise from './Expertise'
import Language from './Language'
import Title from './Title'

const LeftPanel: FC = () => {
  return (
    <Wrapper>
      <Avatar />
      <Title color='white' text='Contact' />
      <ContactDetail />
      <Title color='white' text='Education' />
      <Education />
      <Title color='white' text='Expertise' />
      <Expertise />
      <Title color='white' text='Language' />
      <Language />
    </Wrapper>
  )
}

export default LeftPanel

const Wrapper = styled.div`
  background-color: #333b4a;
  width: 328px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 55px;
  padding-top: 45px;
`
