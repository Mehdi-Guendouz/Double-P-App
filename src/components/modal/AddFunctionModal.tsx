import { useState, useTransition } from "react";
import Modal from "./Modal";
import { Button } from "../ui/button";
import { DialogContent, DialogTitle } from "../ui/dialog";

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
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import { historyType } from "@/types/history";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  functionType,
  functionValidator,
} from "@/validation/function-validator";
import { Textarea } from "../ui/textarea";
import { axiosInstance } from "@/api/config";

type AddHistoryModalProps = {
  history?: historyType;
};

const AddFunctionModal = ({ history }: AddHistoryModalProps) => {
  const [isOpen, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const openModal = () => {
    setOpen(true);
  };

  const functionsForm = useForm<functionType>({
    resolver: zodResolver(functionValidator),
    defaultValues: {
      word: "",
      description: "",
      number: 0,
    },
  });

  const handelSubmit = async (
    data: functionType,
    type: "palindrome" | "perfectNmb" | "NPN"
  ) => {
    startTransition(() => {
      if (type === "palindrome") {
        console.log("palindrome");
        console.log(data);
        axiosInstance
          .post("/carte/palindrome", {
            word: data.word,
            description: data.description,
          })
          .then((res) => {
            console.log(res);
            toast.success("palindrome successful");
            functionsForm.reset();
          })
          .catch((err) => {
            console.log(err);
            toast.error("something went wrong");
          });
      } else if (type === "perfectNmb") {
        console.log("perfectNmb");
        console.log(data);
        axiosInstance
          .post("/carte/parfait", {
            number: data.number,
            description: data.description,
          })
          .then((res) => {
            console.log(res);
            toast.success("number successful");
            functionsForm.reset();
          })
          .catch((err) => {
            console.log(err);
            toast.error("something went wrong");
          });
      } else if (type === "NPN") {
        console.log("NPN");
        console.log(data);
        axiosInstance
          .post("/carte/nearestPerfect", {
            number: data.number,
            description: data.description,
          })
          .then((res) => {
            console.log(res);
            toast.success("number successful");
            functionsForm.reset();
          })
          .catch((err) => {
            console.log(err);
            toast.error("something went wrong");
          });
      }
    });
  };

  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <Button
        className="text-center text-lg font-normal hover:text-black hover:bg-white border border-black px-6 py-5 rounded-md bg-secondary-black text-white transition-all "
        onClick={openModal}
        variant={"outline"}
        size={"default"}
      >
        calculate
      </Button>
      <DialogContent>
        <Tabs defaultValue="palindrome" className="pt-5">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="palindrome">Palindrome</TabsTrigger>
            <TabsTrigger value="perfectNumber">Perfect Number</TabsTrigger>
            <TabsTrigger value="npn">NPN</TabsTrigger>
          </TabsList>
          <TabsContent value="palindrome">
            <DialogTitle className="text-left mt-4 text-2xl py-2">
              Check if the word is palindrome
            </DialogTitle>
            <Form {...functionsForm} key={3}>
              <form
                action=""
                onSubmit={functionsForm.handleSubmit((data) =>
                  handelSubmit(data, "palindrome")
                )}
                className="space-y-4 "
              >
                <FormField
                  control={functionsForm.control}
                  name="word"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col ">
                      <FormLabel className="text-base font-medium  ">
                        Word
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="ex: ktk"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={functionsForm.control}
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
                          className="disabled:bg-white resize-none h-[200px] disabled:text-primary-grey-700 disabled:text-sm disabled:opacity-100 border border-[#E5E9EE] border-solid font-medium"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button
                    type="submit"
                    className="text-center text-base font-normal hover:text-black hover:bg-white border border-black px-6 py-4 rounded-md bg-secondary-black text-white transition-all "
                    variant={"outline"}
                    size={"default"}
                  >
                    Find
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="perfectNumber">
            <DialogTitle className="text-left mt-4 text-2xl py-2 capitalize">
              check if the number is Perfect
            </DialogTitle>

            <Form {...functionsForm} key={2}>
              <form
                action=""
                onSubmit={functionsForm.handleSubmit((data) =>
                  handelSubmit(data, "perfectNmb")
                )}
                className="space-y-4 "
              >
                <FormField
                  control={functionsForm.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col ">
                      <FormLabel className="text-base font-medium  ">
                        Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="ex: 10"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={functionsForm.control}
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
                          className="disabled:bg-white resize-none h-[200px] disabled:text-primary-grey-700 disabled:text-sm disabled:opacity-100 border border-[#E5E9EE] border-solid font-medium"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button
                    type="submit"
                    className="text-center text-base font-normal hover:text-black hover:bg-white border border-black px-6 py-4 rounded-md bg-secondary-black text-white transition-all "
                    variant={"outline"}
                    size={"default"}
                  >
                    Find
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="npn">
            <DialogTitle className="text-left mt-4 text-2xl py-2 capitalize">
              Find the Perfect Number
            </DialogTitle>

            <Form {...functionsForm} key={3}>
              <form
                action=""
                onSubmit={functionsForm.handleSubmit((data) =>
                  handelSubmit(data, "NPN")
                )}
                className="space-y-4 "
              >
                <FormField
                  control={functionsForm.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col ">
                      <FormLabel className="text-base font-medium  ">
                        Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="ex: 10"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={functionsForm.control}
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
                          className="disabled:bg-white resize-none h-[200px] disabled:text-primary-grey-700 disabled:text-sm disabled:opacity-100 border border-[#E5E9EE] border-solid font-medium"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button
                    type="submit"
                    className="text-center text-base font-normal hover:text-black hover:bg-white border border-black px-6 py-4 rounded-md bg-secondary-black text-white transition-all "
                    variant={"outline"}
                    size={"default"}
                  >
                    Find
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Modal>
  );
};

export default AddFunctionModal;
