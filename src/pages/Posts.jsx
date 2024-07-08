import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../state/postSlice";
import { useEffect } from "react";
import { Card } from "flowbite-react";


export default function Posts() {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  const recordsList = records.map((item) => (
    <Card key={item.id} className="max-w-sm mx-auto hover:cursor-pointer">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.description}
      </p>
    </Card>
  ));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <section className="py-7">
        {loading ? (
          <h1 className="dark:text-white text-center">Loading...</h1>
        ) : records.length > 0 ? (
          <div className="w-5/6 mx-auto  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recordsList}
          </div>
        ) : (
          <h1 className="dark:text-white text-center">
            {error ? "Network Error" : "No Data"}
          </h1>
        )}
      </section>
    </>
  );
}
