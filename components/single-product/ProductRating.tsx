import { FaStar } from "react-icons/fa";

function ProductRating({ id }: { id: string }) {
  const rating = 4.4;
  const numReviews = 25;

  return (
    <span className="flex gap-1 items-center text-md mt-1">
      <FaStar className="w-3 h-3" />
      {rating} {`(${numReviews}) reviews`}
    </span>
  );
}
export default ProductRating;
