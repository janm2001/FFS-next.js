"use client";

import { createBlog } from "@/app/actions/blogs";
import { useActionState } from "react";

const NewBlogPage = () => {
  const [state, formAction] = useActionState(createBlog, { error: "" });
  return (
    <div>
      <h2>Create new blog</h2>
      <form action={formAction}>
        <div>
          <label>
            <input type="text" name="title" required minLength={5} />
            Title
          </label>
        </div>
        <div>
          <label>
            <input type="text" name="author" required minLength={5} />
            Author
          </label>
        </div>
        <div>
          <label>
            <input type="text" name="url" required minLength={5} />
            Url
          </label>
        </div>
        <button type="submit">Create new blog</button>
      </form>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
};

export default NewBlogPage;
