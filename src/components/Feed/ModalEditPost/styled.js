import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  background: red;
`
export const ContainerModal = styled.form`
  position:fixed;
  top: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 723px;
  height: 349px;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 9999;

  background: #FFFFFF;
  border: 1px solid #999999;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 80%;
    margin: 0 10px;
  }
`
