
import { ReactNode } from "react";

type StyledButtonProptype = {
    className?:string;
    children: ReactNode;
    active?:boolean;
    
}
const StyledButton:React.FC<StyledButtonProptype> = ({className, children, active= false, ...props}) => {
  return (
    <button className={`bg-background border-[3px] px-6 py-2 text-sm flex items-center relative gap-2 border-zinc-50 font-medium rounded-full ${className}`} {...props}>
      {active && <div className={`w-2 h-2 bg-primary rounded-full absolute top-1/2 -translate-y-1/2 left-3`}></div>}
        <p className={`opacity-75 ${active && "opacity-100"}`}>{children}</p>
    </button>
  )
}

export default StyledButton