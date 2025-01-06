import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import BlogCards from "../../../components/user/blogCards/BlogCards";
import { Helmet } from "react-helmet-async";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Florist | Blog</title>
        <meta name="description" content="Blog" />
      </Helmet>
      <PageBreadCrumb page="blog">Our Blog</PageBreadCrumb>
      <BlogCards />
    </div>
  );
}

export default Blog;
