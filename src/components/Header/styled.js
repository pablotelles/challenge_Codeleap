import styled from 'styled-components'

export const HeaderSlyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 27px 37px;
    background-color: #000000;
    color: white;
`
export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;

    color: #FFFFFF;
`
export const UserInfo = styled.div`
    display: flex;

      p {
        margin-right: 20px;}
      
      a{
        color: #777777;
        font-size: 16px;
        transition: 0.3s;     
      }
      a:hover{
        color: white;
        transition: 0.3s;
      }
`
