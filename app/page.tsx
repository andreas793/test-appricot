'use client'
import {
    FC,
    useEffect,
    useState
} from 'react';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';

const Home: FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Список продуктов</h1>
            {loading ? <Loading /> : <ProductList products={products} />}
        </div>
    );
};

export default Home;