import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FunctionType from "../shared/FunctionType";
import { cn } from "@/lib/utils";
import AlertDialogModal from "../modal/AlterDeleteModel";

type HistoryCardProps = {
  description?: string;
  actionType: string;
  word?: string;
  number?: number;
  isValid: boolean;
  nearestPerfectNumber?: number;
  id: string;
};

const HistoryCard = ({
  description,
  actionType,
  number,
  word,
  isValid,
  nearestPerfectNumber,
  id,
}: HistoryCardProps) => {
  return (
    <Card className="w-[300px] min-h-[300px]">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 justify-between">
          <div>
            <h1 className="text-primary-black">Function</h1>
          </div>
          <FunctionType functionName={actionType} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {word && (
          <div className=" flex items-center justify-start gap-1 ">
            <span>Word: </span>
            <p className="text-secondary-black text-base">{word}</p>
          </div>
        )}
        {number && (
          <div className=" flex items-center justify-start gap-1 ">
            <span>number: </span>
            <p className="text-secondary-black text-base">{number}</p>
          </div>
        )}
        <div className="">
          Description:
          <p className="text-primary-grey-700 text-sm line-clamp-3">
            {description}
          </p>
        </div>
        <div
          className={cn(
            "flex items-center justify-center min-h-10 p-1",
            actionType === "nearestParfait"
              ? "bg-primary-green"
              : isValid
              ? "bg-primary-green capitalized"
              : " bg-red-600"
          )}
        >
          {actionType === "palindrome" ? (
            isValid ? (
              <div>the word is a palindrome</div>
            ) : (
              <div>the word is not a palindrome</div>
            )
          ) : actionType === "numberParfait" ? (
            isValid ? (
              <div>this is a perfect number</div>
            ) : (
              <div>this is not a perfect number</div>
            )
          ) : isValid ? (
            <div>the number {number} is already a perfect number</div>
          ) : (
            <div>the nearest perfect number is {nearestPerfectNumber}</div>
          )}
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <AlertDialogModal text={actionType} id={id} />
      </CardFooter>
    </Card>
  );
};

export default HistoryCard;
