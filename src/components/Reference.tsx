import styled from '@emotion/styled'
import { FC } from 'react'

const references = [
  {
    name: 'Name Surname',
    job: 'Job position, Company Name',
    phone: '123-456-7890',
    email: 'hello@gmail.com'
  },
  {
    name: 'Name Surname',
    job: 'Job position, Company Name',
    phone: '123-456-7890',
    email: 'hello@gmail.com'
  }
]

const Reference: FC = () => {
  return (
    <List>
      {references.map(({ name, job, phone, email }, index) => (
        <ListItem key={index}>
          <Name>{name}</Name>
          <Job>{job}</Job>
          <Detail>
            <span>Phone: </span> {phone}
          </Detail>
          <Detail>
            <span>Email: </span> {email}
          </Detail>
        </ListItem>
      ))}
    </List>
  )
}

const List = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  padding: 24px 0;
  width: 50%;
`

const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 8px;
`

const Job = styled.p`
  color: #545454;
  margin-bottom: 16px;
`

const Detail = styled.div`
  display: flex;
  align-items: center;
  color: #545454;
  font-size: 13px;
  line-height: 1.6;

  span {
    color: black;
    display: block;
    font-weight: 700;
    margin-right: 10px;
  }
`

export default Reference
