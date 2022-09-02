import styled from '@emotion/styled'
import { FC } from 'react'

const Details = [
  {
    title: 'Phone',
    value: '123-456-7890'
  },
  {
    title: 'Email',
    value: 'jennie@blackpink.com'
  },
  {
    title: 'Address',
    value: '123 Fake St, New York, NY 10001'
  }
]

const ContactDetail: FC = () => {
  return (
    <Wrapper>
      <List>
        {Details.map(({ title, value }, index) => (
          <ListItem key={index}>
            <Title>{title}</Title>
            <Detail>{value}</Detail>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default ContactDetail

const Wrapper = styled.div`
  color: white;
  padding: 25px 0;
`

const List = styled.ul``

const ListItem = styled.li`
  margin-bottom: 26px;
`

const Title = styled.h3`
  font-weight: 600;
  line-height: 1.6;
`

const Detail = styled.p`
  font-size: 13px;
  font-weight: 400;
`
