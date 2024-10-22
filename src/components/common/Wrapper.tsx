import React, { ReactNode } from 'react'

type WrapperProptype = {
    className?:string;
    children:ReactNode;
}
const Wrapper:React.FC<WrapperProptype> = ({className="",children}) => {
  return (
    <div className={`max-w-[110rem] w-full h-full mx-auto px-10 ${className}`}>
        {children}
    </div>
  )
}

export default Wrapper