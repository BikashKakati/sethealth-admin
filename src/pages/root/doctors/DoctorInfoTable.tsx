
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for doctors...
const doctors = [
  { id: 1, name: "Dr. John Doe", email: "john.doe@example.com", phone: "+1 (555) 123-4567", patients: 120, rating: 4.8, revenue:31 },
  { id: 2, name: "Dr. Jane Smith", email: "jane.ysmith@example.com", phone: "+1 (555) 987-6543", patients: 95, rating: 4.6,revenue:31  },
  { id: 3, name: "Dr. Mike Johnson", email: "mike.johnson@example.com", phone: "+1 (555) 246-8135", patients: 150, rating: 4.9,revenue:31  },
  { id: 4, name: "Dr. Emily Brown", email: "emily.brown@example.com", phone: "+1 (555) 369-2580", patients: 80, rating: 4.7,revenue:31  },
  { id: 5, name: "Dr. David Lee", email: "david.lee@example.com", phone: "+1 (555) 147-2589", patients: 110, rating: 4.5,revenue:31  },
]

const DoctorInfoTable=()=> {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCriteria, setFilterCriteria] = useState('name')

  const filteredDoctors = doctors.filter(doctor => 
    doctor[filterCriteria as keyof typeof doctor].toString().toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">Doctor Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Input
            placeholder="Search doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select value={filterCriteria} onValueChange={setFilterCriteria}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="patients">Patients</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name</TableHead>
                <TableHead className="w-[200px]">Email</TableHead>
                <TableHead className="w-[150px]">Phone</TableHead>
                <TableHead className="w-[50px] text-right">Patients</TableHead>
                <TableHead className="w-[50px] text-right">Rating</TableHead>
                <TableHead className="w-[50px] text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">{doctor.name}</TableCell>
                  <TableCell>{doctor.email}</TableCell>
                  <TableCell>{doctor.phone}</TableCell>
                  <TableCell className="text-right">{doctor.patients}</TableCell>
                  <TableCell className="text-right">{doctor.rating.toFixed(1)}</TableCell>
                  <TableCell className="text-right">{doctor.revenue.toFixed(1)}k</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default DoctorInfoTable