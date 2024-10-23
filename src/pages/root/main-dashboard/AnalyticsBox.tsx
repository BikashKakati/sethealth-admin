import React, { ReactNode } from 'react'

type AnalyticsBoxPropType = {
    children:ReactNode
}
const AnalyticsBox:React.FC<AnalyticsBoxPropType> = ({children}) => {
    return (
            <div className="h-[18rem] rounded-2xl bg-slate-200/50 border-[3px] p-2 border-zinc-50">
                {children}
            </div>
    )
}

export default AnalyticsBox