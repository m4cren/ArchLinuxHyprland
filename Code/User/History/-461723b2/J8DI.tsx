import { getCollection } from "@/server/database";

const Blogs = async () => {
    const blogCollection = await getCollection("blogs");
    const blogs = await blogCollection?.find().sort({ $natural: -1 }).toArray();

    if (blogs) {
        return (
            <div className="grid grid-cols-2 gap-10">
                {blogs.map((blogs) => (
                    <div
                        key={blogs._id.toString()}
                        className="bg-[#2c2c2c] rounded-2xl"
                    >
                        <h4 className="text-[#f5f5f5] text-[0.9rem] font-light">
                            {blogs._id.getTimestamp().toLocaleDateString()}
                        </h4>
                        <h1 className="text-[#f5f5f5] text-[1.5rem] font-bold">
                            {blogs.title}
                        </h1>
                        <p className="text-[#f5f5f5] text-[0.75rem] font-light">
                            {" "}
                            {blogs.content}
                        </p>
                    </div>
                ))}
            </div>
        );
    } else {
        return <p>Failed to load blogs...</p>;
    }
};

export default Blogs;
