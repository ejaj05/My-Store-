import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
const Sidebar = () => {
  const [products] = useContext(ProductContext)
  let distinct_category = 
        products && products.reduce((acc, product) =>[...acc,product.category],[])
  distinct_category = [...new Set(distinct_category)]

  const colors = ()=>{
    return `rgba(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},0.5)`
  }
  return (
    <div className="fixed top-0 left-0 w-[20%] h-full bg-slate-200 text-white z-50 flex flex-col items-center py-10">
      <Link to='/create' className="text-blue-400  px-[4%] py-[3%]  border-[2px] border-blue-200 px-5 py-2 text-[1.5vw] font-regular rounded">
        Add New Product
      </Link>
      <hr className="my-3 w-[80%]" />
      <h1 className="w-[80%] text-xl text-zinc-600 font-medium">Category Filter</h1>
      <ul className="w-[80%]">
        {distinct_category.map((category,idx)=>(
          <li key={idx} className="w-full flex items-center gap-2 mt-4">
          <span style={{backgroundColor:colors()}}
            className={`inline-block w-4 h-4 rounded-full`}
          ></span>
          <Link to={`/?category=${category}`} className="text-gray-500 hover:text-gray-800">{category}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
