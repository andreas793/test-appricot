interface ProductCardProps {
    product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white shadow p-4 rounded">
            <img
                src={product?.images}
                alt={product?.title}
                className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold">
                <a
                    href={`/products/${product?.id}`}
                    className="text-blue-500 hover:underline"
                >
                    {product?.title}
                </a>
            </h3>
            <p className="text-gray-600 font-bold">${product?.price}</p>
        </div>
    );
};

export default ProductCard;