import { getCollection } from "@/server/database";

const Blogs = async () => {
    const blogCollection = await getCollection("blogs");
    const blogs = await blogCollection?.find().sort({ $natural: -1 }).toArray();

    if (blogs) {
        return (
            <div className="grid grid-cols-2 gap-10">
                {blogs.map((blogs) => (
                    <div key={blogs._id.toString()}></div>
                ))}
            </div>
        );
    } else {
        return <p>Failed to load blogs...</p>;
    }
};

export default Blogs;
