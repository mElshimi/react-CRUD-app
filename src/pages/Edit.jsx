import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";
import { editPost } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import AreaField from "../components/AreaField";
import { Button } from "flowbite-react";
import { useEffect } from "react";

export default function Edit() {
  const { record, loading, error } = usePostDetails();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const submit = (data) => {
    dispatch(
      editPost({
        id: record.id,
        title: data.title,
        description: data.description,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  useEffect(() => {
    reset({
      title: record?.title,
      description: record?.description,
    });
  }, [record, reset]);

  return (
    <>
      <section className="dark:text-white mt-24">
        <Loading loading={loading} error={error}>
          <form
            onSubmit={handleSubmit(submit)}
            className=" w-11/12 mx-auto shadow-lg"
          >
            {/* title input */}
            <InputField register={register} name={"title"} errors={errors} />
            {/* pricee input */}

            {/* description input */}
            <AreaField
              register={register}
              name={"description"}
              errors={errors}
            />

            <Button
              disabled={isSubmitting}
              className="mt-5"
              aria-label="submit"
              type="submit"
            >
              Save
            </Button>
          </form>
        </Loading>
      </section>
    </>
  );
}
