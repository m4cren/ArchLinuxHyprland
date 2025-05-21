import { fetchBlogs } from "@/actions/blogs";
import { BlogType } from "@/types/types";
import React from "react";

const Blogs = async () => {
    const blogDatas: BlogType[] = await fetchBlogs();
    return (
        <ul className="flex flex-col gap-4 w-[full] items-center bg-[#2c2c2c]">
            {blogDatas.map(({ title, content }, index) => (
                <li
                    key={index}
                    className="flex flex-col gap-4 bg-[#f5f5f5] rounded-xl p-4 text-[#f5f5f5] [box-shadow:0_0_4px_rgba(0,0,0,0.4)_inset] w-[35rem] h-[20rem]"
                >
                    <h3 className="text-[1.5rem] font-bold">{title}</h3>
                    <p className="text-[1rem] font-extralight">{content}</p>
                </li>
            ))}
        </ul>
    );
};

export default Blogs;
