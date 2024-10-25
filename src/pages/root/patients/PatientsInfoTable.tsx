
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for doctors...
const doctors = [
  { id: 1, name: "Dr. John Doe", email: "john.doe@example.com", phone: "+1 (555) 123-4567", age: 120, birth:'23/09/2024', joineddate:"31/03/2034"},
]

const PatientsInfoTable=()=> {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCriteria, setFilterCriteria] = useState('name')

  const filteredDoctors = doctors.filter(doctor => 
    doctor[filterCriteria as keyof typeof doctor].toString().toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">Patients List</CardTitle>
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
              <SelectItem value="age">Age</SelectItem>
              <SelectItem value="birth">Birth Date</SelectItem>
              <SelectItem value="joined-date">Joined Date</SelectItem>
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
                <TableHead className="w-[50px] text-right">Age</TableHead>
                <TableHead className="w-[50px] text-right">Birth Date</TableHead>
                <TableHead className="w-[50px] text-right">Joined Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">{doctor.name}</TableCell>
                  <TableCell>{doctor.email}</TableCell>
                  <TableCell>{doctor.phone}</TableCell>
                  <TableCell className="text-right">{doctor.age}</TableCell>
                  <TableCell className="text-right">{doctor.birth}</TableCell>
                  <TableCell className="text-right">{doctor.joineddate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default PatientsInfoTable