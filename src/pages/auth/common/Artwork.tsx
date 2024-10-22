import { ArtworkProptype } from '@/types'
import React from 'react'

const Artwork:React.FC<ArtworkProptype> = ({mainImage,title,subtitle}) => {
  return (
    
    <div className="lg:flex w-2/3 relative bg-gradient-to-br from-blue-400 to-blue-700 h-full items-center justify-end rounded-tl-[30rem]">
    <div className="w-[28rem] absolute -left-[2rem] top-[1rem]">
      <img
        src={mainImage}
        alt="Brain visualization"
        className="img-contain"
      />
    </div>
    <div className="text-white w-2/3 text-center">
      <h2 className="text-[3rem] font-bold mb-4">{title}</h2>
      <p className="text-3xl text-pretty">{subtitle}</p>
    </div>
  </div>
  )
}

export default Artwork