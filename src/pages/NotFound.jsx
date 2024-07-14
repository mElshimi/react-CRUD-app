import { Button } from "flowbite-react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate, useRouteError } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  
  return (
    <>
      <main className="min-h-screen text-center bg-gray-900 w-full flex justify-center items-center flex-col gap-y-3  text-white">
        <div>
          <h1>Oops!</h1>
          <p className="py-2">Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Button
            className="mt-2 mx-auto"
            onClick={() => navigate("/", { replace: true })}
          >
            <IoArrowUndoSharp className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </div>
      </main>
    </>
  );
}
