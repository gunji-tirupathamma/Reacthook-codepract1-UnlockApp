// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#0b0c1e, #3c2940);
  background-size: cover;
  height: 50vw;
`

export const Text = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #fff;
`

export const Image = styled.img`
  height: 50px;
  width: 50px;
  src: 'https://assets.ccbp.in/frontend/hooks/lock-img.png';
  margin: 10px;
`

export const Button = styled.button`
  value: 'Lock';
  border-radius: 10px;
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: #06b6d4;
  outline-width: 0px;
  border-width: 0px;
`
