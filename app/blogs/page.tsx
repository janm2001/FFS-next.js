import Link from "next/link";
import { getBlogs } from "../services/blogs";

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ title: string }>;
}) => {
  const { title } = await searchParams;
  const blogs = await getBlogs(title);

  return (
    <div>
      <h2>Blogs</h2>
      <form action="">
        <input type="text" name="title" /> <button>Search</button>
      </form>

      <div>
        {blogs.map((blog) => {
          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.author}</p>
              <p>{blog.likes}</p>
              <a href={blog.url}>{blog.url}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
