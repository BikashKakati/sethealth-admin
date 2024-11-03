import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllDoctorsQuery } from "@/store/apiSlice/doctorApi";
import { DoctorType } from "@/types";
import { Stethoscope } from "lucide-react";
import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";


const DoctorInfoTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("name");
  const { data: allDoctorsData, isLoading: isDoctorsLoading } =
    useGetAllDoctorsQuery("");

  console.log(allDoctorsData?.data);
  const filteredDoctors = allDoctorsData?.data?.filter((doctor: DoctorType) =>
    doctor[filterCriteria as keyof typeof doctor]
      .toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const columns: TableColumn<DoctorType>[] = [
    {
      name: "Name",
      cell: (row) => row.name,
      sortable: true,
      width: "150px",
    },
    {
      name: "Email",
      cell: (row) => row.email,
      sortable: true,
      width: "250px",
    },
    {
      name: "Phone",
      cell: (row) => row.phone,
      width: "150px",
    },
    {
      name: "Appointments",
      cell: (row) => row.appointments,
      sortable: true,
      width: "150px",
    },
    {
      name: "Ratings",
      cell: (row) => row.rating,
      sortable: true,
      width: "100px",
    },
    {
      name: "Revenue",
      cell: (row) => row.revenue,
      sortable: true,
      width: "100px",
    },
  ];

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex gap-3 items-center">
          <Stethoscope className="h-6 w-6  text-primary"/>
          Doctor Information
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
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
        <div className="w-full overflow-x-auto">
          {!isDoctorsLoading && (
            <DataTable
              data={filteredDoctors}
              columns={columns}
              pagination
              noDataComponent={
                <div className="text-center py-4 text-muted-foreground">
                  No services found matching your search.
                </div>
              }
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorInfoTable;
