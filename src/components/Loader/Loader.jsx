import React from 'react'
import loading from '../../assets/loading/loading.gif'
import { LoaderStyle } from './styled'

export const Loader = () => {
  return (
    <LoaderStyle>
      <img src={loading} alt="" />
    </LoaderStyle>
  )
}
