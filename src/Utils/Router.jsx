import { Routes,Route } from "react-router-dom"
import DescDetails from "../Components/DescDetails"
import Home from "../Components/Home"
import Create from "../Components/Create"
import Edit from "../Components/Edit"

const Router = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/products/:id" element={<DescDetails />} />
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
    )
}
export default Router