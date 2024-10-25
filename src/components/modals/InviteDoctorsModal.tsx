import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2, Stethoscope } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inviteDoctorsSchema } from "./scema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useInviteDoctorMutation } from "@/store/apiSlice/invite/inviteApi";
// import { toast } from "react-toastify";

const InviteDoctorsModal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [sendInvite, { isLoading }] = useInviteDoctorMutation();

  const form = useForm({
    resolver: zodResolver(inviteDoctorsSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleInvite = async (values: z.infer<typeof inviteDoctorsSchema>) => {
    try {
      const response = await sendInvite(values);
      console.log(response);
    } catch (err) {
      console.log(err);
      // toast.error(err);
    }
  };
  return (
    <Dialog open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-blue-600 rounded-full  hover:bg-blue-700 text-white"
        >
          Invite Doctors
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-blue-600 flex items-center">
            <Stethoscope className="mr-2 h-4 w-4" />
            Invite a Doctor
          </DialogTitle>
          <DialogDescription>
            Expand our medical network. Enter the email address of the doctor
            you'd like to invite to MediaConnect.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleInvite)}>
            <div className=" gap-2 space-y-2 py-2">
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Doctor@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-blue-600 mt-2 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Invitation"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default InviteDoctorsModal;
