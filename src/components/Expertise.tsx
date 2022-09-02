import styled from '@emotion/styled'
import { FC } from 'react'

const listItem = [
  'UI/UX',
  'Visual Design',
  'Wireframes',
  'Storybooks',
  'User Flows',
  'Process Flows'
]

const Expertise: FC = () => {
  return (
    <List>
      {listItem.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  )
}

const List = styled.ul`
  color: white;
  font-size: 14px;
  padding: 26px 0 26px 16px;
`

const ListItem = styled.li`
  list-style: disc;
  padding: 8px 0 8px 12px;
`

export default Expertise
