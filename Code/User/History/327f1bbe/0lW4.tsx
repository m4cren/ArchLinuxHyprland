interface CartProps {
    cartItem: string[];
}

const Cart = ({ cartItem }: CartProps) => {
    return (
        <ul>
            <h1>Cart</h1>
            {cartItem.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default Cart;
