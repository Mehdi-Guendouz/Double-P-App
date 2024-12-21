import HistoryCard from "@/components/Cards/HistoryCard";
import AddFunctionModal from "@/components/modal/AddFunctionModal";
import Layout from "@/components/shared/Layout";
import { Toaster } from "sonner";

const MainPage = () => {
  return (
    <Layout>
      <div className="flex flex-col px-4 py-4 space-y-10 w-full ">
        <Toaster position="bottom-right" richColors />
        <div className="flex justify-between items-start w-full">
          <div>
            <h1 className="text-4xl font-bold bg-primary-green text-black px-1 w-fit ">
              Main Page
            </h1>
            <p className="text-gray-700 text-sm">
              choose the function that can help you
            </p>
          </div>
          <AddFunctionModal />
        </div>
        <div>
          <HistoryCard title="title" description="description" />
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
