import styled from '@emotion/styled'
import { FC } from 'react'

const language = ['English', 'Spanish']

const Language: FC = () => {
  return (
    <Wrapper>
      <List>
        {language.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default Language

const Wrapper = styled.div`
  padding: 26px 0;
`

const List = styled.ul`
  color: white;
`

const ListItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  padding: 8px 0;
`
