import React from "react";
import BlogForm from "../../components/BlogForm";

type Props = {
    params: { id: string };
};
const Update = ({ params }: Props) => {
    return (
        <div className="h-screen">
            <BlogForm handler="updateBlog" id={params.id} />
        </div>
    );
};

export default Update;
