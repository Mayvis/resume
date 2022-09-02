import styled from '@emotion/styled'
import { FC } from 'react'
import ExperienceItem from './ExperienceItem'
import { experiences } from '../data'

const Experience: FC = () => {
  return (
    <Wrapper>
      {experiences.map(
        ({ startYear, endYear, company, job, detail }, index) => (
          <ExperienceItem
            key={index}
            startYear={startYear}
            endYear={endYear}
            company={company}
            job={job}
            detail={detail}
          />
        )
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 26px 0 32px 0;
`

export default Experience
