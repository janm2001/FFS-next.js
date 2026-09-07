
const blogs = [
    { id: 1, title: 'Modern training for middle distance runners', author: 'Jan M', url: 'example.com', likes: 21 },
    { id: 2, title: 'Best Next.js tutorial', author: 'Daniel Mark', url: 'example.com', likes: 32 },

]

let nextId = 3;

export const getBlogs = () => {
    return blogs;
}

export const addBlog = (title: string, author: string, url: string) => {
    blogs.push({ id: nextId++, title, author, url, likes: 0 })
}

export const getBlog = (id: number) => {
    return blogs.find(blog => blog.id === id);
}

export const increaseLikes = (id: number) => {
    const blog = blogs.find(blog => blog.id === id);

    if (blog) {
        blog.likes++;
    }
}