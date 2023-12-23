import SingleCard from "../components/SingleCard";
import { useGetAllProductsQuery } from "../redux/product/productSlice";
import ReactLoading from "react-loading";

const Product = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  isLoading && (
    <ReactLoading type={"cubes"} color={"red"} height={667} width={375} />
  );
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl my-10 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {data?.data?.map((product) => (
          <SingleCard product={product} key={product?._id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
