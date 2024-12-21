import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import loginImage from "@/assets/registerImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../shared/PasswordInput";
import { useEffect, useTransition } from "react";
import { useUserStore } from "@/hooks/user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerType,
  registerValidator,
} from "@/validation/register-validator";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import LoadingComponent from "../shared/LoadingComponent";
import { axiosInstance } from "@/api/config";
import { toast } from "sonner";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // we use useTransition to handle the loading state
  const [isPending, startTransition] = useTransition();

  //  we get the user and navigate
  const userStore = useUserStore();
  const navigate = useNavigate();

  // defining the form using the useForm library and it will take care of everything
  const registerForm = useForm<registerType>({
    resolver: zodResolver(registerValidator),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  // we sent the data to user
  const onSubmit = async (data: registerType) => {
    startTransition(() => {
      axiosInstance
        .post("/auth/register", data)
        .then((res) => {
          console.log(res);
          toast.success("Register successful");
          userStore.setToken(res.data.token);
          localStorage.setItem("userToken", res.data.token);
          navigate("/main");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("userToken");

    // Check if the user is already authenticated
    if (tokenLocalStorage) {
      userStore.setToken(tokenLocalStorage);

      // Redirect the user only if the current location is the register page
      if (location.pathname === "/register") {
        navigate("/main");
      }
    }
  }, []);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden register-card-shadow ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative bg-primary-green  hidden md:flex items-center justify-center w-full h-full overflow-hidden ">
            <img src={loginImage} alt="Image" className="bg-white  " />
          </div>
          <div className="p-6 md:p-8 bg-white relative">
            {isPending && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                <LoadingComponent className="w-16 h-16" />
              </div>
            )}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="bg-primary-green text-black font-medium text-3xl px-1">
                  Create Account
                </h1>
                <p className="text-balance text-muted-foreground ">
                  Register to Enter Double P account
                </p>
              </div>
              <Form {...registerForm}>
                <form
                  action=""
                  onSubmit={registerForm.handleSubmit(onSubmit)}
                  className="space-y-4 "
                >
                  <FormField
                    control={registerForm.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col ">
                        <FormLabel className="text-base font-medium  ">
                          User Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="userName"
                            {...field}
                            type="text"
                            placeholder="ex: Mehdi"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col ">
                        <FormLabel className="text-base font-medium  ">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            {...field}
                            type="email"
                            placeholder="ex: m@example.com"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col ">
                        <FormLabel className="text-base font-medium  ">
                          Password
                        </FormLabel>
                        <FormControl>
                          <PasswordInput
                            {...field}
                            id="password"
                            placeholder="********"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full ">
                    Register
                  </Button>
                </form>
              </Form>

              <div className="text-center text-sm">
                you have an account?{" "}
                <Link to={"/login"} className="underline underline-offset-4">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
