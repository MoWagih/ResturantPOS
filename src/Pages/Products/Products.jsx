import styles from './Products.module.css'
import { useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import NavHeader from "../../components/NavHeader/NavHeader";
import { useData } from "../../Store/index";

export default function Products() {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const { data , resetActiveId , active_cat_id  } = useData();
  const [categoryInfo , setCategoryInfo] = useState({});


  useEffect(() => {
    let acceptedRoutes = ["pasta", "burgers", "pizza"];
    let obj = data.find((el) => {
      return el.documentId == active_cat_id;
    });
    
    if (obj) {
      setCategoryInfo(obj)
      setCheck(true);
    } else {
      navigate("/error");
    }

    return ()=>{
      resetActiveId();
    }
  }, []);

  return (
    <div id={styles.Products}>
      <NavHeader tabName={categoryInfo.name} />
      <h1>Products in {categoryInfo.name}</h1>
    </div>
  );
}
