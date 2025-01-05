import { useEffect } from "react";
import AdminBreadCrumb from "../../../components/admin/adminBreadCrumb/AdminBreadCrumb";
import ProductsTable from "../../../components/admin/productsTable/ProductsTable";
function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <AdminBreadCrumb page="products">Products</AdminBreadCrumb>
      <ProductsTable />
    </div>
  );
}

export default Products;
