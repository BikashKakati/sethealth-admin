import brainImage from "@/assets/img/brain-img.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginUserMutation } from "@/store/apiSlice/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { signInSchema } from "../schemas";
import Artwork from "./Artwork";
import { dispatch } from "@/constants";
import { handleIsAuthendicated } from "@/store/reducersSlice/authSlice";


const SignIn: React.FC = () => {
  const [loginUser, {isLoading:loginLoading}] = useLoginUserMutation();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async(values: z.infer<typeof signInSchema>) => {

    const response = await loginUser(values);

    if(!response.error){
      dispatch(handleIsAuthendicated(true));
      navigate("/");
    }

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
                {loginLoading ? "Loading...":"Login"}
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
