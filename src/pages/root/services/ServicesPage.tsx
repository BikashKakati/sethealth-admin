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

const initialServices: Service[] = [
  {
    id: 1,
    name: "General Consultation",
    symptoms: ["Fever", "Fatigue", "Headache"],
  },
  {
    id: 2,
    name: "Cardiology Check-up",
    symptoms: ["Chest Pain", "Shortness of Breath", "Irregular Heartbeat"],
  },
  {
    id: 3,
    name: "Dermatology Examination",
    symptoms: ["Rash", "Itching", "Skin Discoloration"],
  },
  {
    id: 4,
    name: "Orthopedic Assessment",
    symptoms: ["Joint Pain", "Swelling", "Limited Range of Motion"],
  },
  {
    id: 5,
    name: "Pediatric Care",
    symptoms: [
      "Growth Concerns",
      "Developmental Delays",
      "Childhood Illnesses",
    ],
  },
  {
    id: 6,
    name: "Neurology Consultation",
    symptoms: ["Headaches", "Dizziness", "Numbness"],
  },
  {
    id: 7,
    name: "Gastroenterology Screening",
    symptoms: ["Abdominal Pain", "Nausea", "Digestive Issues"],
  },
  {
    id: 8,
    name: "Ophthalmology Check-up",
    symptoms: ["Vision Changes", "Eye Pain", "Redness"],
  },
  {
    id: 9,
    name: "ENT Examination",
    symptoms: ["Ear Pain", "Sore Throat", "Sinus Pressure"],
  },
  {
    id: 10,
    name: "Endocrinology Consultation",
    symptoms: ["Fatigue", "Weight Changes", "Hormonal Imbalances"],
  },
];

const ServicesPage = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.symptoms.some((symptom) =>
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
              <AddServicesModal setServices={setServices} />
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
