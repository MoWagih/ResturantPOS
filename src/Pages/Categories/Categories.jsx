import styles from "./Categories.module.css";
import NavHeader from "../../components/NavHeader/NavHeader";
import { useData } from "../../Store";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const { data: Categories , setActiveId } = useData();

  const navigate = useNavigate();

  const openCategory = (path, cat_id)=>{
    setActiveId(cat_id);
    navigate(path);
  }


  return (
    <div id={styles.CategoriesPage}>
      <NavHeader tabName={"Categories"} />
      <div className="container d-flex flex-wrap col-12">
        {Categories.map((el) => (
          <div
            className="col-10 col-md-6 col-lg-4 p-2"
            onClick={() => {
              openCategory(el.path , el.documentId);
            }}
          >
            <div
              className={
                styles.card +
                " rounded border shadow col-12 p-3 d-flex flex-column gap-3 align-items-center"
              }
            >
              <img src={el.img} alt="" />
              <p key={el.documentId}>{el.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
