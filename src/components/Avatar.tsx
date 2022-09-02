import styled from '@emotion/styled'
import { FC } from 'react'
import Jennie from '../assets/avatar.jpeg'

const Avatar: FC = () => {
  return (
    <ImageWrapper>
      <Image src={Jennie} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export default Avatar