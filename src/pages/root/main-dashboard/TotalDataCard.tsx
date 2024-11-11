import { Button } from '@/components/ui/button';
import { ChevronRight} from 'lucide-react';
import { ReactNode } from 'react';

type TotalDataCardProptype = {
    children:ReactNode;
    title: string;
    numbers: number;
    growth:number;
    iconBgColor: string;
}
const TotalDataCard = ({children, title, numbers, growth,iconBgColor}:TotalDataCardProptype) => {
  return (
    <div className='h-[9rem] bg-slate-50 p-5 rounded-lg'>
        <div className='text-xs font-medium flex items-center gap-3 text-zinc-500'>
            <div className={`p-2 w-10 h-10 rounded-xl flex items-center justify-center ${iconBgColor}`}>
               {children}
            </div>
            <p className='capitalize'>Total {title}</p>
        </div>
        <p className='text-3xl font-medium text-center'>{numbers}</p>
        <div className='flex items-center justify-between'>
            <p className='text-[11px] font-medium'>{growth}% last Month</p>
            <Button variant={"ghost"} className='bg-background rounded-full p-2 h-auto w-auto' size="icon">
                <ChevronRight/>
            </Button>
        </div>
    </div>
  )
}

export default TotalDataCard