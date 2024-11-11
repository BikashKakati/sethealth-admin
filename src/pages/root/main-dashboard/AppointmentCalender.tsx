import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Ellipsis } from 'lucide-react'
import React, { useState } from 'react'

const AppointmentCalender = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="bg-foreground text-white rounded-lg h-full w-1/3 flex flex-col items-center justify-start">
    <div className="w-full px-3 pt-3 flex items-center justify-between">
      <p className="font-medium ml-2">Appointment</p>
      <Button variant={"ghost"} size={"icon"} className="h-auto">
        <Ellipsis className="h-4 w-4" />
      </Button>
    </div>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="flex-1"
    />
  </div>
  )
}

export default AppointmentCalender