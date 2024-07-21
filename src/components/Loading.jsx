import { ContainerWithChildren } from "postcss/lib/container";

export default function Loading({ loading, error, children }) {
  return (
    <>
      {loading ? (
        <h1 className="dark:text-white text-center">Loading...</h1>
      ) : error ? (
        <h1 className="dark:text-white text-center">Network Error</h1>
      ) : (
        children
      )}
    </>
  );
}
