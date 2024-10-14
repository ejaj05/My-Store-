import { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loader from "./Loader";
import axios from "../Utils/Axios";
const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURI(search.split("=")[1]);
  const [filterProduct, setFilterProduct] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterProduct(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!filterProduct) setFilterProduct(products);
    if (category != "undefined") {
      // getProductCategory();

      setFilterProduct(()=>{
        return products.filter((product) => product.category === category);
      })
    }
  }, [category, products]);
  return (
    <div className="w-full h-full relative flex">
      <Sidebar />
      <div className="relative ml-[20%] px-5 flex-1 flex bg-slate-100 flex-wrap gap-2">
        {filterProduct ? (
          filterProduct.map((product, idx) => (
            <Link
              key={idx}
              to={`/products/${product.id}`}
              className="w-[22%] h-[40vh]  flex items-center flex-col bg-white rounded-md overflow-hidden p-3 border-[2px] border-zinc-300"
            >
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
                className="w-full h-[90%] hover:scale-110 bg-contain bg-no-repeat bg-center "
              ></div>
              <div className="p-4">
                <p className="text-sm hover:text-blue-500">{product.title}</p>
              </div>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
export default Home;
