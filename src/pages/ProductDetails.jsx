import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/product/productSlice";
import { IoIosArrowDown } from "react-icons/io";
import ReactLoading from "react-loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);
  isLoading && (
    <ReactLoading type={"cubes"} color={"red"} height={667} width={375} />
  );
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="max-w-screen-xl mx-auto  px-5 py-24">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <LazyLoadImage
              alt={data?.data?.productName}
              src={data?.data?.image}
              // width={image.width}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data?.data?.productName}
              </h1>

              <p className="leading-relaxed">{data?.data?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {data?.data?.color.length > 0
                    ? data?.data?.color.map((c) => (
                        <button
                          style={{
                            backgroundColor: c,
                          }}
                          key={c}
                          className={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none`}
                        ></button>
                      ))
                    : ""}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      {data?.data?.size.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $ {data?.data?.price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
