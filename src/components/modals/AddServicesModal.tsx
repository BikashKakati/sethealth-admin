import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useCreateServiceMutation } from "@/store/apiSlice/servicesApi";
import { DoctorModalProptype } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { createServiceSchema, CreateServiceSchemaType } from "./schema";

const AddServicesModal: React.FC<DoctorModalProptype> = ({
  hideTrigger = false,
  children,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [createService, { isLoading: isCreateServiceLoading }] =
    useCreateServiceMutation();

  const form = useForm({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      name: "",
      symptoms: "",
    },
  });

  const handleAddService = async (values: CreateServiceSchemaType) => {
    try {
      const symptoms = values.symptoms
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "");

      await createService({
        serviceName: values.name,
        symptoms,
      });

      form.reset();
      setIsDialogOpen(false);
    } catch (err: unknown) {
      console.log("Service creation failed", err);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {hideTrigger ? (
          children
        ) : (
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Service</DialogTitle>
          <DialogDescription>
            Enter the details of the new service you'd like to add.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddService)}>
            <div className="gap-2 space-y-2 py-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="symptoms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Symptoms</FormLabel>
                    <FormControl>
                      <Textarea
                        className="max-h-[14rem]"
                        placeholder="Enter symptoms separated by commas"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="mt-2 transition-all duration-200"
                disabled={isCreateServiceLoading}
              >
                {isCreateServiceLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddServicesModal;
