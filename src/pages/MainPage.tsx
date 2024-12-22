import { axiosInstance } from "@/api/config";
import HistoryCard from "@/components/Cards/HistoryCard";
import AddFunctionModal from "@/components/modal/AddFunctionModal";
import Layout from "@/components/shared/Layout";
import LoadingComponent from "@/components/shared/LoadingComponent";
import { useHistoryStore } from "@/hooks/history-store";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const historyStore = useHistoryStore();

  const getHistoryForUser = async () => {
    setLoading(true);
    axiosInstance
      .get("/carte")
      .then((res) => {
        console.log(res.data);
        historyStore.setHistory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getHistoryForUser();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col px-4 py-4 space-y-10 w-full ">
        <Toaster position="bottom-right" richColors />
        <div className="flex justify-between items-start w-full flex-col sm:flex-row gap-2">
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
        <div className="flex items-center justify-start flex-wrap gap-4">
          {loading ? (
            <div className="flex items-center justify-center">
              <LoadingComponent className="h-16 w-16" />
            </div>
          ) : historyStore.history.length > 0 ? (
            historyStore.history.map((item) => (
              <HistoryCard
                key={item._id}
                description={item.description}
                actionType={item.actionType}
                word={item.word}
                number={item.number}
                isValid={item.isValid}
                nearestPerfectNumber={item.nearestPerfectNumber}
                id={item._id}
              />
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-20 text-gray-500">
              <p>there is no history create your first</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
