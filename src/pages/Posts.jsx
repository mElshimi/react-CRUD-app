import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import { deletePost, getPosts } from "../store/postSlice";
import Loading from "../components/Loading";

export default function Posts() {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  const deleteRecord = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <section className="py-7">
        <Loading loading={loading} error={error}>
          <PostItem records={records} deleteRecord={deleteRecord} />
        </Loading>
      </section>
    </>
  );
}
