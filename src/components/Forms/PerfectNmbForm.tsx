import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { axiosInstance } from "@/api/config";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  perfectNumberType,
  perfectNumberValidator,
} from "@/validation/perfectNmp-Validator";
import { useHistoryStore } from "@/hooks/history-store";

const PerfectNmbForm = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const historyStore = useHistoryStore();

  const perfectNumberForm = useForm<perfectNumberType>({
    resolver: zodResolver(perfectNumberValidator),
    defaultValues: {
      description: "",
      number: 0,
    },
  });
  const handelSubmit = async (data: perfectNumberType) => {
    startTransition(() => {
      console.log("perfectNmb");
      console.log(data);
      axiosInstance
        .post("/carte/parfait", {
          number: data.number,
          description: data.description,
        })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          setMessage(res.data.message);
          historyStore.addHistory(res.data.data);
          perfectNumberForm.reset();
        })
        .catch((err) => {
          console.log(err);
          toast.error("something went wrong");
        });
    });
  };

  return (
    <Form {...perfectNumberForm} key={3}>
      <form
        action=""
        onSubmit={perfectNumberForm.handleSubmit(handelSubmit)}
        className="space-y-4 "
      >
        <FormField
          control={perfectNumberForm.control}
          name="number"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col ">
              <FormLabel className="text-base font-medium  ">Number</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="ex: 10" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={perfectNumberForm.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col ">
              <FormLabel className="text-base font-medium  ">
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="write something for you to remember why you want to calculate this"
                  value={field.value}
                  className="disabled:bg-white resize-none h-[100px] disabled:text-primary-grey-700 disabled:text-sm disabled:opacity-100 border border-[#E5E9EE] border-solid font-medium"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        {message.length > 0 && (
          <div className="flex items-center justify-center h-10  text-secondary-black">
            <p>{message}</p>
          </div>
        )}
        <div>
          <Button
            type="submit"
            className="text-center text-base font-normal hover:text-black hover:bg-white border border-black px-6 py-4 rounded-md bg-secondary-black text-white transition-all "
            variant={"outline"}
            size={"default"}
            disabled={isPending}
          >
            calculate
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PerfectNmbForm;
