import styled from '@emotion/styled'
import { FC } from 'react'
import { resultTitle } from '../data'

const ResumeTitle: FC = () => {
  return (
    <Wrapper>
      <Name>
        <span>{resultTitle.name}</span>
        <span>{resultTitle.subName}</span>
      </Name>
      <Job>{resultTitle.job}</Job>
      <Detail>{resultTitle.detail}</Detail>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 56px;
`

const Name = styled.h1`
  display: flex;
  font-size: 48px;
  font-weight: 700;
  gap: 12px;
  letter-spacing: 3px;
  padding-bottom: 8px;

  span {
    color: #333b4a;

    &:last-child {
      font-weight: 400;
      color: #343944;
    }
  }
`

const Job = styled.div`
  letter-spacing: 6px;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 12px;
`

const Detail = styled.p`
  font-size: 13px;
  color: #5a5a5a;
  line-height: 1.2;
`

export default ResumeTitle
