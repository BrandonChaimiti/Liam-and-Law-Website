import React from 'react'
import Navbar from './Navbar/Navbar'
import Youtube_Embed from './Vid_Cards/Youtube_Embed'

function Videos() {
  return (
    <>
      <Navbar />
      <Youtube_Embed embedID='EgoMftgxm3s' />
      <Youtube_Embed embedID='ITPLVXWSL48' />
      <Youtube_Embed embedID='NxELnC36A6w' />
    </>
  )
}

export default Videos