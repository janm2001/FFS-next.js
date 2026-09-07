import { getUserWithNotesAndBlogs } from "@/app/services/users";
import Link from "next/link";
import { notFound } from "next/navigation";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUserWithNotesAndBlogs(Number(id));

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Notes</h3>
      <ul>
        {user.notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.content}</Link>
            {note.important && <strong> (important)</strong>}
          </li>
        ))}
      </ul>

      <h3>Blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
