import { increaseBlogLikes } from "@/app/actions/blogs";
import { getBlog } from "@/app/services/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlog(Number(id));
  if (!blog) {
    return notFound();
  }
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <Link href={blog.url}>{blog.url}</Link>
      <form action={increaseBlogLikes}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Likes {blog.likes}</button>
      </form>
    </div>
  );
};

export default BlogPage;
