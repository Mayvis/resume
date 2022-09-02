import styled from '@emotion/styled'
import { FC } from 'react'

type IProps = {
  startYear: number
  endYear: number
  company: string
  job: string
  detail: string
}

const ExperienceItem: FC<IProps> = ({
  startYear,
  endYear,
  company,
  job,
  detail
}) => {
  return (
    <Wrapper>
      <Year>
        {startYear} - {endYear}
      </Year>
      <Company>{company}</Company>
      <Job>{job}</Job>
      <Detail>{detail}</Detail>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5px;
    height: 100%;
    width: 2px;
    background-color: #6e6e6e;
  }

  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid black;
    left: 0;
    top: 0;
    background-color: white;
  }

  &:last-child {
    > :last-child {
      padding-bottom: 0;
    }
  }
`

const Year = styled.div`
  color: #525252;
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 700;
`

const Company = styled.div`
  color: #5e5e5e;
  margin-bottom: 12px;
`

const Job = styled.div`
  color: #525252;
  margin-bottom: 12px;
  font-weight: 700;
`

const Detail = styled.div`
  color: #5e5e5e;
  line-height: 1.4;
  font-size: 14px;
  padding-bottom: 40px;
`

export default ExperienceItem
