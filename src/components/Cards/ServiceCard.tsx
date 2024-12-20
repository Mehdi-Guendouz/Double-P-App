import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  image: string;
  title: string;
  className?: string;
  titleClassName?: string;
};

const ServiceCard = ({
  image,
  title,
  className,
  titleClassName,
}: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        " flex-row py-14 px-10 max-w-[600px] w-[600px] xl:max-w-[700px] border-black  rounded-45 service-card-shadow",
        className
      )}
    >
      <div className="flex  justify-between gap-10">
        <div className="flex flex-col ">
          {title.split(" ").length <= 2 ? (
            <>
              <div
                className={cn(
                  "text-3xl bg-primary-green px-1 font-medium h-fit w-fit max-w-[200px]",
                  titleClassName
                )}
              >
                {title.split(" ").slice(0, 1).join(" ")}
              </div>
              <div
                className={cn(
                  "text-3xl bg-primary-green px-1 font-medium h-fit w-fit max-w-[200px]",
                  titleClassName
                )}
              >
                {title.split(" ").slice(1, 2).join(" ")}
              </div>
            </>
          ) : (
            <>
              <div
                className={cn(
                  "text-3xl bg-primary-green px-1 font-medium h-fit w-fit max-w-[200px]",
                  titleClassName
                )}
              >
                {title.split(" ").slice(0, 2).join(" ")}
              </div>
              <div
                className={cn(
                  "text-3xl bg-primary-green px-1 font-medium h-fit w-fit max-w-[400px]",
                  titleClassName
                )}
              >
                {title.split(" ").slice(2).join(" ")}
              </div>
            </>
          )}
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
