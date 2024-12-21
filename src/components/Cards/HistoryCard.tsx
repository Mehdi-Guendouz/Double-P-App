import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FunctionType from "../shared/FunctionType";

type HistoryCardProps = {
  title: string;
  description: string;
};

const HistoryCard = ({ title, description }: HistoryCardProps) => {
  return (
    <Card className="w-[300px] min-h-[300px]">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 justify-between">
          <div>
            <h1 className="text-primary-black">{title}</h1>
          </div>
          <div className="flex items-center gap-1">something</div>
        </CardTitle>
        <FunctionType functionName="name" />
        <CardDescription className="text-primary-grey-700">
          category:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
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
