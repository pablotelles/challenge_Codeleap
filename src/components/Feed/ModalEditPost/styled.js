import styled from 'styled-components'

export const ContainerModal = styled.form`
  position:fixed;
  top: 20%;
  display: flex;
  flex-direction: column;
  width: 723px;
  height: 349px;
  padding: 0 30px;
  z-index: 9999;

  background: #FFFFFF;
  box-shadow: 0 0 10em black;
  border: 1px solid #999999;
   
  @media (max-width: 900px) {
    width: 95%;
  }
`
