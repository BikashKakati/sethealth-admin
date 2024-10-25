import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Stethoscope, Search } from "lucide-react";
import DataTable, { TableColumn } from "react-data-table-component";
import AddServicesModal from "@/components/modals/AddServicesModal";
import { Service } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ServicesPage = () => {
  const services = useSelector(
    (state: RootState) => state.serveicesSlice.services
  );
  const [searchTerm, setSearchTerm] = useState("");
  const filteredServices = services.filter(
    (service: Service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.symptoms.some((symptom:string) =>
        symptom.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const columns: TableColumn<Service>[] = [
    {
      name: "Service Name",
      selector: (row) => row.name,
      sortable: true,
      width: "300px",
    },
    {
      name: "Symptoms",
      cell: (row) => (
        <div className="flex flex-wrap gap-2">
          {row.symptoms.map((symptom: string, index: number) => (
            <Badge key={index} variant="secondary">
              {symptom}
            </Badge>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-blue-600" />
              <CardTitle>My Services</CardTitle>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services or symptoms"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <AddServicesModal />
            </div>
          </div>
          <CardDescription>
            Manage and view your medical services and associated symptoms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={filteredServices}
            pagination
            noDataComponent={
              <div className="text-center py-4 text-muted-foreground">
                No services found matching your search.
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesPage;
