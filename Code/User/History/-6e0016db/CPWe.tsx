import React from "react";
import BlogForm from "../../components/BlogForm";

type Props = {
    params: { id: string };
};
const Update = async ({ params }: Props) => {
    const id = params.id;
    return (
        <div className="h-screen">
            <BlogForm handler="updateBlog" id={id} />
        </div>
    );
};

export default Update;
