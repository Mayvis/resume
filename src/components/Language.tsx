import styled from '@emotion/styled'
import { FC } from 'react'

const language = ['English', 'Spanish']

const Language: FC = () => {
  return (
    <List>
      {language.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  )
}

const List = styled.ul`
  color: white;
  padding: 26px 0;
`

const ListItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  padding: 8px 0;
`

export default Language
