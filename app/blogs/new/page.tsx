import { createBlog } from "@/app/actions/blogs";

const NewBlogPage = () => {
  return (
    <div>
      <h2>Create new blog</h2>
      <form action={createBlog}>
        <div>
          <label>
            <input type="text" name="title" />
            Title
          </label>
        </div>
        <div>
          <label>
            <input type="text" name="author" />
            Author
          </label>
        </div>
        <div>
          <label>
            <input type="text" name="url" />
            Url
          </label>
        </div>
        <button type="submit">Create new blog</button>
      </form>
    </div>
  );
};

export default NewBlogPage;
