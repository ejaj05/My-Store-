import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../Utils/Context";
import axios from "../Utils/Axios";
import Loader from "./Loader";
const DescDetails = () => {
  const navigate = useNavigate();
  const [products,setProducts] = useContext(ProductContext);
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log
  // const getSingleProduct = async () => {
  //   try {
  //     const response = await axios.get("/products/" + idx);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
 const handleDelete = (id) => {
   if(window.confirm("Are you sure you want to delete this product?")){
    const filterProduct = products.filter(product => product.id != id);
    setProducts(filterProduct)
    localStorage.setItem("products", JSON.stringify(filterProduct))
    navigate(-1);
   }  else{
    console.log("Delete operation cancelled.")
   }
  };
  const handleGoBack = () => {
    navigate('/');
  };
  useEffect(() => {
    // getSingleProduct();
    if(!data){
      setData(()=>products.filter((p)=>p.id==id)[0])
    }
  }, []);
  return (
    <div className="relative w-[80%] m-auto h-full  flex justify-center items-center gap-10">
      {data ? (
        <>
          <span className="absolute top-20 left-20">
            <FaArrowLeftLong onClick={handleGoBack} className=" text-3xl" />
            Go Back
          </span>
          <img
            className="w-[45%] h-[70%] object-contain bg-center"
            src={data.image}
            alt=""
          />
          <div className="content w-[35%]">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <h3 className="text-zinc-400 my-5">{data.category}</h3>
            <p className="text-lg font-medium mb-3 text-red-300">{`Rs ${data.price}`}</p>
            <p className="text-sm mb-8">{data.description}</p>
            <Link to={`/edit/${data.id}`} className="border-[2px] border-blue-200 text-blue-400 font-medium px-6 py-2 rounded mr-5">
              Edit
            </Link>
            <Link onClick={()=>handleDelete(data.id)} className="border-[2px] border-red-200 text-red-400 font-medium px-5 py-2 rounded">
              Delete
            </Link>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default DescDetails;
