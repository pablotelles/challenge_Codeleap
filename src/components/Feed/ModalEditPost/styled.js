import styled from 'styled-components'

export const BackgorundModal = styled.div`
  position: fixed;
  width: 1920px;
  height: 1080px;
  left: 0px;
  top: 0px;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  background: rgba(119, 119, 119, 0.8);
`

export const ContainerModal = styled.form`
  position:fixed;
  left: 314px;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  width: 723px;
  height: 349px;
  padding: 0 30px;
  z-index: 9999;

  background: #FFFFFF;
  box-shadow: 0 0 10em black;
  border: 1px solid #999999;
  box-sizing: border-box;

  @media (max-width: 900px) {
    max-width: 90%;
  }
`
