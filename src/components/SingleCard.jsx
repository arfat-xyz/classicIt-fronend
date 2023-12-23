import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const SingleCard = ({ product }) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/details/${product?._id}`}>
          <LazyLoadImage
            alt={product?.productName}
            src={product?.image}
            // width={image.width}
            className="rounded-t-lg"
          />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product?.productName}
              {product?.productName.length > 1
                ? product?.productName.slice(0, 3) + "..."
                : product?.productName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ${product?.price}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleCard;
