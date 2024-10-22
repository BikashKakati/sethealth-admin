import brainImage from "@/assets/img/brain-img.png";
import { ArrowRight } from "lucide-react";
import Artwork from "./Artwork";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInSchema } from "../schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignIn: React.FC = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof signInSchema>) => {
    // Handle login logic here
    console.log("Login attempted with:", values);
  };

  const title = "Set Your Health";
  const subtitle = "Revolutionizing healthcare with cutting-edge technology";

  return (
    <div className="h-screen flex flex-col items-center md:flex-row overflow-hidden">
      {/* Login Form*/}
      <div className="md:w-[40%] w-full flex items-center justify-center p-8 lg:p-16 relative">
    
        <div className="w-full max-w-md z-20">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">
            Welcome Back
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="border-blue-300 focus:!ring-blue-500 transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        className="border-blue-300 focus:!ring-blue-500 transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full flex items-center justify-center"
              >
                Login
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </Form>
          <p className="mt-6 text-center text-blue-800">
            Don't have an account?{" "}
            <a href="/sign-up" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <Artwork
        mainImage={brainImage}
        title={title}
        subtitle={subtitle}
        mainImageAlt="brain visualization"
      />
    </div>
  );
};

export default SignIn;
