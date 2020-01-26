import React from 'react'
import orangutang from '../assets/orangutang.png'
import styled from 'styled-components/macro'

export const Header = () => {
  return (
    <ImageContainer>
  <img src={orangutang} alt="Orangutang" />
  </ImageContainer>
  )
}

const ImageContainer = styled.div`
display: flex;
justify-content: center;
`