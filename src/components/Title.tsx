import styled from '@emotion/styled'
import { FC } from 'react'

type IProps = {
  text: string
  color: string
}

const Title: FC<IProps> = ({ text, color }) => {
  return <Text color={color}>{text}</Text>
}

const Text = styled.h2`
  position: relative;
  color: ${props => props.color};
  font-size: 24px;
  font-weight: 600;
  position: relative;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: ${props => props.color};
  }
`

export default Title
