import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../state/postSlice";
import { useParams } from "react-router-dom";

const usePostDetails = () => {
  const dispatch = useDispatch();
  const { loading, error, record } = useSelector((state) => state.posts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return { loading, error, record };
};

export default usePostDetails;
