import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";
export default function Details() {
  const { record, loading, error } = usePostDetails();
  return (
    <>
      <section className="py-7">
        <Loading loading={loading} error={error}>
          <div className="w-11/12 bg-white text-center flex flex-col justify-between dark:bg-slate-800 shadow-lg rounded-lg py-5 px-3 mx-auto ">
            <div>
              <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                {record?.title}
              </h5>
              <p className="font-normal text-gray-700 py-5 dark:text-gray-400">
                {record?.description}
              </p>
            </div>
          </div>
        </Loading>
      </section>
    </>
  );
}
