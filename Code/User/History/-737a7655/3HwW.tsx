import React from "react";

const BlogCard = ({ blogs }: any) => {
    return (
        <div
            key={blogs._id.toString()}
            className="bg-[#2c2c2c] rounded-2xl px-8 py-6"
        >
            <h4 className="text-[#f5f5f5] text-[0.9rem] font-light">
                {blogs._id.getTimestamp().toLocaleTimeString()}
            </h4>
            <h1 className="text-[#f5f5f5] text-[1.5rem] font-bold">
                {blogs.title}
            </h1>
            <p className="text-[#f5f5f5] text-[0.75rem] font-light">
                {" "}
                {blogs.content}
            </p>
        </div>
    );
};

export default BlogCard;
