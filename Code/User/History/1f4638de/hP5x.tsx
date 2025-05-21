import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const Heart = () => {
    const [isLike, setIsLike] = useState<boolean>(false);
    return (
        <button onClick={() => setIsLike(!isLike)}>
            {isLike ? <FaHeart /> : <FaRegHeart />}
        </button>
    );
};

export default Heart;
