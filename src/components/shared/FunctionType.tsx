import { cn } from "@/lib/utils";

type cardFunctionProps = {
  functionName: string;
};

const FunctionType = ({ functionName }: cardFunctionProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-3 py-1 w-fit bg-primary-green rounded-[10px] text-[12px] text-white font-normal",
        {
          "bg-secondary-black": functionName === "palindrome",
          "bg-yellow-500": functionName === "numberParfait",
          "bg-primary-green text-secondary-black":
            functionName === "nearestParfait",
        }
      )}
    >
      {functionName}
    </div>
  );
};

export default FunctionType;
