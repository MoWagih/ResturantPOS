import { useEffect, useState } from "react";
import {Navigate,useLocation,useNavigate,useParams,} from "react-router-dom";

export default function Products() {
  const [categories] = useState([
    { name: "pasta", path: "pasta", price: 100  },
    { name: "burgers", path: "burgers", price: 100  },
    { name: "pizza", path: "pizza", price: 200 },
]);

  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const params = useParams();

  useEffect(()=>{
    let acceptedRoutes = ["pasta","burgers","pizza"];
    // let obj = categories.filter((el)=>{return el.price})

    let obj = categories.find((el)=>{return el.path == params.category})
    
    if(obj){
        setCheck(true);
    } else {
        navigate("/error");
    }

},[]);


  return <div>products in category {params.category}</div>;
}
