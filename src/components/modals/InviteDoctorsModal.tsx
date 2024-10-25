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
import { Input } from "@/components/ui/input";
import { useInviteDoctorMutation } from "@/store/apiSlice/inviteApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Stethoscope } from "lucide-react";
import {useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { inviteDoctorsSchema } from "./schema";
import { DoctorModalProptype } from "@/types/index";

const InviteDoctorsModal:React.FC<DoctorModalProptype> = ({hideTrigger=false,children}) => {

  const [sendInvite, { isLoading }] = useInviteDoctorMutation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  

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
        {
          hideTrigger ? children:
          <Button
          variant="default"
          className="rounded-full text-white"
        >
          Invite Doctors
        </Button>
        }
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
                className="mt-2 transition-all duration-200"
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
