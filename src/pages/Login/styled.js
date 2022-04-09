import styled from 'styled-components'

export const Form = styled.form`
  max-width: 500px;
  margin: 200px auto;
  padding: 32px 28px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-sizing: border-box

    @media (min-width: 900px) {
      margin: 500px 10px;
    }
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  font-weight: bold;
  text-align: left;
  margin-bottom: 30px ;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
