export default function Loading({ loading, error, records, children }) {
  return (
    <>
      {loading ? (
        <h1 className="dark:text-white text-center">Loading...</h1>
      ) : records.length > 0 ? (
        children
      ) : (
        <h1 className="dark:text-white text-center">
          {error ? "Network Error" : "No Data"}
        </h1>
      )}
    </>
  );
}
