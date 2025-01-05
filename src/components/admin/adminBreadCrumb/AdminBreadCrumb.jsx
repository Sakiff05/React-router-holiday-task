import { Link } from "react-router-dom";
import styles from "./AdminBreadCrumb.module.css";
function AdminBreadCrumb({ children, page }) {
  return (
    <div className={`${styles.customBg} mt-12 mb-10 text-center`}>
      <h1 className="text-5xl mb-4">{children}</h1>
      <p className="text-xl">
        <span className="text-rose-500 ">
          <Link to="/">ADMIN</Link>
        </span>
        | {page.toUpperCase()}
      </p>
    </div>
  );
}

export default AdminBreadCrumb;
