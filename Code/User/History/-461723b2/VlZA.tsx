import { getCollection } from "@/server/database";
import BlogCard from "./BlogCard";

const Blogs = async () => {
    const blogCollection = await getCollection("blogs");
    const blogs = await blogCollection?.find().sort({ $natural: -1 }).toArray();

    if (blogs) {
        return (
            <div className="grid grid-cols-2 gap-10 p-8">
                {blogs.map((blogs) => (
                    <BlogCard blogs={blogs} />
                ))}
            </div>
        );
    } else {
        return <p>Failed to load blogs...</p>;
    }
};

export default Blogs;
