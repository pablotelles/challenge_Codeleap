import styled from 'styled-components'

export const FeedList = styled.section`
  width: 723px;
  margin: 35px auto;`
export const FeedItem = styled.section`
  box-sizing: border-box;
  margin-bottom: 45px;
  border: 1px solid #999999;
  background: #FFFFFF;
`
export const HeaderPosts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 30px;
  background: #000000;
  color: #FFFFFF;

  div {
    display: flex;
    align-items: center;
    
    img {
      margin-left: 34px;
    }
  }
`
export const ContentPosts = styled.div`
  padding: 24px 30px 57px 30px;
`
export const ContentInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #777777;
`
export const ContentText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`
export const UserPost = styled.p`
  font-weight: 700;
  padding-bottom: 18px;
`
export const PostDate = styled.p`
  font-weight: 400;
`
