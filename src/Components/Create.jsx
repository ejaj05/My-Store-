import { useContext, useState } from "react";
import axios from "../Utils/Axios";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ProductContext } from "../Utils/Context";
import { toast } from "react-toastify";
import { nanoid } from "nanoid/non-secure";
const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const addProductHandler = (event) => {
    event.preventDefault();
    if (image && title && category && price && description) {
      const newProduct = {
        id: nanoid(),
        image: image,
        title: title,
        category: category,
        price: price,
        description: description,
      };
      setProducts([...products, newProduct]);
      localStorage.setItem("products", JSON.stringify([...products, newProduct]));
      setImage("");
      setTitle("");
      setCategory("");
      setPrice("");
      setDescription("");
      navigate('/')
      toast.success("Product added successfully")
    } else {
      toast.error("All fields are required")
    }
  };
  return (
    <form
      onSubmit={addProductHandler}
      className="w-[50%] m-auto my-[3%] flex flex-col gap-4"
    >
      <h1 className="text-3xl">Add New Product</h1>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="url"
        placeholder="Image Link"
        className="p-3 w-full text-1xl bg-zinc-300 rounded outline-none"
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
        className="p-3 w-full text-1xl bg-zinc-300 rounded outline-none"
      />
      <div className="flex justify-between">
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="category"
          className="p-3 w-[48%] text-1xl bg-zinc-300 rounded outline-none"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="price"
          className="p-3 w-[48%] text-1xl bg-zinc-300 rounded outline-none"
        />
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 bg-zinc-300 outline-none rounded"
        placeholder="enter product description here"
        rows={10}
      ></textarea>
      <div>
        <button
          to="/create"
          className="text-blue-400  px-[6] py-[3] border-[2px] border-blue-200 px-5 py-2 text-xl font-regular rounded"
        >
          Add New Product
        </button>
        <div className="absolute top-[-20px] left-[-50px] ml-[22%] mt-10">
          <Link to="/">
            <FaArrowLeftLong className=" text-3xl" />
            Go Back
          </Link>
        </div>
      </div>
    </form>
  );
};
export default Create;
