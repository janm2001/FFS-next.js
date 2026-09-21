"use server"

import { revalidatePath } from "next/cache";
import { addBlog, increaseLikes } from "../services/blogs";
import { redirect } from "next/navigation";

export const createBlog = async (prevState: { error: string }, formData: FormData) => {
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const url = formData.get('url') as string;

    if (title.length < 5) {
        return { error: "Title must be longer than 5 characters long" }

    }

    if (author.length < 5) {
        return { error: "Author must be longer than 5 characters long" }

    }

    if (url.length < 5) {
        return { error: "Url must be longer than 5 characters long" }

    }

    await addBlog(title, author, url);

    revalidatePath('/blogs');
    redirect('/blogs');


}

export const increaseBlogLikes = async (formData: FormData) => {
    const id = Number(formData.get('id'));
    await increaseLikes(id);
    revalidatePath(`/blogs/${id}`)
    revalidatePath('/blogs');
}