import { useEffect } from "react";
import AdminBreadCrumb from "../../../components/admin/adminBreadCrumb/AdminBreadCrumb";
import ProductsTable from "../../../components/admin/productsTable/ProductsTable";
import { Helmet } from "react-helmet-async";
function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Admin | Products</title>
        <meta name="description" content="Products" />
      </Helmet>
      <AdminBreadCrumb page="products">Products</AdminBreadCrumb>
      <ProductsTable />
    </div>
  );
}

export default Products;
