import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { Input } from "../ui/input";
const AddServicesModal = ({ setServices }) => {
  const [newService, setNewService] = useState({ name: "", symptoms: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddService = (e) => {
    e.preventDefault();
    const symptoms = newService.symptoms
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "");
    const newServiceObj = {
      id: `${Date.now()}`,
      name: newService.name,
      symptoms,
    };
    setServices((prev) => [...prev, newServiceObj]);
    setNewService({ name: "", symptoms: "" });
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Service</DialogTitle>
          <DialogDescription>
            Enter the details of the new service you'd like to add.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddService}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newService.name}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    name: e.target.value,
                  })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="symptoms" className="text-right">
                Symptoms
              </Label>
              <Textarea
                id="symptoms"
                value={newService.symptoms}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    symptoms: e.target.value,
                  })
                }
                className="col-span-3"
                placeholder="Enter symptoms separated by commas"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Service</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddServicesModal;
