import styled from '@emotion/styled'
import { FC } from 'react'

const details = [
  {
    year: 2008,
    degree: 'Bachelor of Science',
    college: 'University of California, Berkeley'
  },
  {
    year: 2008,
    degree: 'Bachelor of Science',
    college: 'University of California, Berkeley'
  }
]

const Education: FC = () => {
  return (
    <List>
      {details.map(({ year, degree, college }, index) => (
        <ListItem key={index}>
          <Year>{year}</Year>
          <Degree>{degree}</Degree>
          <College>{college}</College>
        </ListItem>
      ))}
    </List>
  )
}

export default Education

const List = styled.ul`
  padding: 26px 0;
  color: white;
`

const ListItem = styled.li`
  margin-bottom: 24px;

  div {
    margin: 4px 0;
  }
`

const Year = styled.div`
  font-size: 15px;
`

const Degree = styled.div`
  font-weight: 600;
  line-height: 1.6;
`

const College = styled.div`
  font-weight: 600;
  font-size: 14px;
`
