import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import loginImage from "@/assets/Illustration3.png";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../shared/PasswordInput";
import { useForm } from "react-hook-form";
import { loginType, loginValidator } from "@/validation/login-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useEffect, useTransition } from "react";
import { axiosInstance } from "@/api/config";
import LoadingComponent from "../shared/LoadingComponent";
import { useUserStore } from "@/hooks/user-store";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // we use useTransition to handle the loading state
  const [isPending, startTransition] = useTransition();

  //  we get the user and navigate
  const userStore = useUserStore();
  const navigate = useNavigate();

  // defining the form using the useForm library and it will take care of everything
  const loginForm = useForm<loginType>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // we sent the data to user
  const onSubmit = async (data: loginType) => {
    startTransition(() => {
      axiosInstance
        .post("/auth/login", data)
        .then((res) => {
          console.log(res.data.token);
          toast.success("Login successful");
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

      // Redirect the user only if the current location is the login page
      if (location.pathname === "/login") {
        navigate("/main");
      }
    }
  }, []);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden text-white login-card-shadow ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative p-6 md:p-8 bg-secondary-black">
            {isPending && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                <LoadingComponent className="w-16 h-16" />
              </div>
            )}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="bg-primary-green text-black font-medium text-3xl px-1  ">
                  Welcome back
                </h1>
                <p className="text-balance text-muted-foreground text-white">
                  Login to your Double P account
                </p>
              </div>
              <Form {...loginForm}>
                <form
                  action=""
                  onSubmit={loginForm.handleSubmit(onSubmit)}
                  className="space-y-4 "
                >
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col ">
                        <FormLabel className="text-base font-medium  ">
                          email
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            {...field}
                            type="email"
                            placeholder="m@example.com"
                            required
                            className="placeholder:text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col ">
                        <FormLabel className="text-base font-medium  ">
                          password
                        </FormLabel>
                        <FormControl>
                          <PasswordInput
                            {...field}
                            id="password"
                            className="placeholder:text-white "
                            placeholder="********"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary-green text-secondary-black hover:bg-white hover:border-primary-green"
                  >
                    Login
                  </Button>
                </form>
              </Form>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to={"/register"} className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="relative hidden bg-white md:flex items-center justify-end w-full h-full overflow-hidden ">
            <img src={loginImage} alt="Image" className="  " />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our{" "}
        <Link to={"#"}>Terms of Service</Link> and{" "}
        <Link to={"#"}>Privacy Policy</Link>.
      </div>
    </div>
  );
}
