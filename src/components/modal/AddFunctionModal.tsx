import { useState } from "react";
import Modal from "./Modal";
import { Button } from "../ui/button";
import { DialogContent, DialogTitle } from "../ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PalindromeForm from "../Forms/palindromeForm";
import PerfectNmbForm from "../Forms/PerfectNmbForm";
import NextPerfectNumber from "../Forms/NPerfectNumber";

const AddFunctionModal = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
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
            <PalindromeForm />
          </TabsContent>
          <TabsContent value="perfectNumber">
            <DialogTitle className="text-left mt-4 text-2xl py-2 capitalize">
              check if the number is Perfect
            </DialogTitle>
            <PerfectNmbForm />
          </TabsContent>
          <TabsContent value="npn">
            <DialogTitle className="text-left mt-4 text-2xl py-2 capitalize">
              Find the Perfect Number
            </DialogTitle>
            <NextPerfectNumber />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Modal>
  );
};

export default AddFunctionModal;
