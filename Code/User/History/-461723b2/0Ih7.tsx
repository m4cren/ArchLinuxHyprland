import { fetchBlogs } from "@/actions/blogs";
import { BlogType } from "@/types/types";
import React from "react";

const Blogs = async () => {
    const blogDatas: BlogType[] = await fetchBlogs();
    return (
        <ul className="flex flex-col gap-4 w-[full] items-center ">
            {blogDatas.map(({ title, content }, index) => (
                <li
                    key={index}
                    className="flex flex-col gap-4 bg-[#2c2c2c] rounded-xl py-6 px-12 text-[#f5f5f5] [box-shadow:-3px_3px_4px_rgba(0,0,0,0.4)] w-[35rem] h-fit "
                >
                    <h3 className="text-[1.5rem] font-bold">{title}</h3>
                    <p className="text-[1rem] font-extralight">{content}</p>
                </li>
            ))}
        </ul>
    );
};

export default Blogs;
