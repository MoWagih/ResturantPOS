import { IoIosArrowRoundBack } from "react-icons/io";
import { FaAngleRight, FaShoppingCart } from "react-icons/fa";
import styles from "./NavHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Store/index";

export default function NavHeader({ tabName }) {
  const navigate = useNavigate();
  const { active_cat_id } = useData();
  return (
    <header id={styles.NavHeader}>
        <div className="d-flex gap-3 align-items-center">
          {active_cat_id != 0 && (
            <IoIosArrowRoundBack
              className={styles.backBtn}
              onClick={() => {
                navigate("/order");
              }}
            />
          )}
          <p className="m-0">Food & Drinks</p>
          <FaAngleRight />
          <p className="m-0">{tabName}</p>
        </div>

      <FaShoppingCart />
    </header>
  );
}
