interface ClearCartProps {
    onClear: () => void;
}

const ClearCart = ({ onClear }: ClearCartProps) => {
    return <button onClick={onClear}>Clear Cart</button>;
};

export default ClearCart;
