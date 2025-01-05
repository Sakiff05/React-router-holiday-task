import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import BlogCards from "../../../components/user/blogCards/BlogCards";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageBreadCrumb page="blog">Our Blog</PageBreadCrumb>
      <BlogCards />
    </div>
  );
}

export default Blog;
