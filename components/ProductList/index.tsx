import ProductCard from '../ProductCard';
import {Product} from "@/app/products/[id]/page";
import {FC} from "react";

interface ProductListProps {
    products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
export default ProductList;

