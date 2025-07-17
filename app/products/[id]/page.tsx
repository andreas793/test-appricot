import Link from "next/link";
import {notFound} from "next/navigation";

const url = 'https://api.escuelajs.co/api/v1/products/';

const getProduct = async (id: string) => {
    const res = await fetch(`${url}${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch a product...');
    }
    return res.json();
}

const ProductPage = async ({params}: { params: { id: string } }) => {
    const {id} = await params;
    try {
        const data = await getProduct(id);

        if (!data) {
            return notFound();
        }

        return (
            <div className="container mx-auto p-4 mt-10">
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <div className="mb-4">
                    <img
                        src={data.images}
                        alt={data.title}
                        className="w-full h-64 object-cover"
                    />
                </div>
                <p className="text-gray-600 font-bold mb-4">Цена: ${data.price}</p>
                <p className="text-gray-600">{data.description}</p>
                <div className="mt-8">
                    <Link
                        className="text-blue-500 hover:underline"
                        href="/"
                    >
                        Назад к списку
                    </Link>
                </div>
            </div>
        );
    } catch (error) {
        return notFound();
    }
};

export default ProductPage;