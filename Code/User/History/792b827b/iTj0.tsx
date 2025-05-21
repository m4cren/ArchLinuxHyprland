interface NavProps {
    cartItemCount: number;
}

const Nav = ({ cartItemCount }: NavProps) => {
    return <div>{cartItemCount}</div>;
};

export default Nav;
