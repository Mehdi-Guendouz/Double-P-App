import { axiosInstance } from "@/api/config";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

import { useHistoryStore } from "@/hooks/history-store";

type AlertDialogModalProps = {
  text: string;
  id: string;
};

const AlertDialogModal = ({ text, id }: AlertDialogModalProps) => {
  const [loading, setLoading] = useState(false);
  const historyStore = useHistoryStore();

  const handleDelete = () => {
    setLoading(true);
    axiosInstance
      .delete(`/carte/delete/${id}`)
      .then(() => {
        toast.success("the item has been deleted ");
        historyStore.deleteHistory(id);
      })
      .catch((err) => {
        console.log(err);
        toast.error("an error has accrued try again");
      })
      .finally(() => {
        setLoading(true);
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} size={"icon"}>
          <Trash color="#FFf" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure? you want to delete "{text}"
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your and
            remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-destructive text-white"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogModal;
