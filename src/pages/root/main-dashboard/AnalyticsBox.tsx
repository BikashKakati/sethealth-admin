import React, { ReactNode } from 'react'

type AnalyticsBoxPropType = {
    children:ReactNode
}
const AnalyticsBox:React.FC<AnalyticsBoxPropType> = ({children}) => {
    return (
            <div className="h-[15rem] rounded-2xl bg-slate-200/50 border-[3px] border-zinc-50">
                {children}
            </div>
    )
}

export default AnalyticsBox