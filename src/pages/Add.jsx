import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import AreaField from "../components/AreaField";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { insertPost } from "../store/postSlice";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submit = (data) => {
    dispatch(insertPost(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <section className="dark:text-white mt-24">
        <form
          onSubmit={handleSubmit(submit)}
          className=" w-11/12 mx-auto shadow-lg"
        >
          {/* title input */}
          <InputField
            register={register}
            name={"title"}
            errors={errors}
            defaultValue="gdg"
          />
          {/* pricee input */}

          {/* description input */}
          <AreaField register={register} name={"description"} errors={errors} />

          <Button
            disabled={isSubmitting}
            className="mt-5"
            aria-label="submit"
            type="submit"
          >
            Save
          </Button>
        </form>
      </section>
    </>
  );
}
