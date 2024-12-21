import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FunctionType from "../shared/FunctionType";

type HistoryCardProps = {
  title: string;
  description?: string;
  actionType: string;
  word?: string;
  number?: number;
};

const HistoryCard = ({
  title,
  description,
  actionType,
  number,
  word,
}: HistoryCardProps) => {
  console.log(title, description, actionType);
  return (
    <Card className="w-[300px] min-h-[300px]">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 justify-between">
          <div>
            <h1 className="text-primary-black">{title}</h1>
          </div>
          <FunctionType functionName={actionType} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {word && (
          <div className=" flex items-start justify-center gap-1 ">
            <span>Word: </span>
            <p className="text-primary-grey-700 text-sm">{word}</p>
          </div>
        )}
        {number && (
          <div className=" flex items-start justify-center gap-1 ">
            <span>Word: </span>
            <p className="text-primary-grey-700 text-sm">{number}</p>
          </div>
        )}
        <div className="">
          Description:
          <p className="text-primary-grey-700 text-sm">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        {/* <AddRecipeModel recipe={recipe} isEdit />
        <AlertDialogModal text={recipe.title} id={recipe.id} isRecipeDeleted /> */}
      </CardFooter>
    </Card>
  );
};

export default HistoryCard;
