"use client";

import { getBlogs } from "@/server/database";
import { BlogType } from "@/types/types";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState<BlogType[] | undefined>();
    useEffect(() => {
        const fetchBlogDatas = async () => {
            const blogDatas = await getBlogs();

            setBlogs(blogDatas);
        };
        fetchBlogDatas();
    }, []);
    return (
        <ul className="flex flex-col gap-4 w-[full] items-center ">
            {blogs?.map(({ title, content, _id }, index) => (
                <li
                    key={index}
                    onClick={() => {
                        redirect(`/blogs/update/${_id.toString()}`);
                    }}
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
