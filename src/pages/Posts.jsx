import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import { getPosts } from "../state/postSlice";
import Loading from "../components/Loading";

export default function Posts() {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <section className="py-7">
        <Loading records={records} loading={loading} error={error}>
          <PostItem records={records} />
        </Loading>
      </section>
    </>
  );
}
