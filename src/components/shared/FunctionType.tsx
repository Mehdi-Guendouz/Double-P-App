import { cn } from "@/lib/utils";

type cardFunctionProps = {
  functionName: string;
};

const FunctionType = ({ functionName }: cardFunctionProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-3  w-fit bg-primary-green rounded-[10px] text-[12px] text-white font-normal",
        {
          "bg-primary-green-dark": functionName === "easy",
          "bg-yellow-500": functionName === "medium",
          "bg-primary-red": functionName === "hard",
        }
      )}
    >
      {functionName}
    </div>
  );
};

export default FunctionType;
