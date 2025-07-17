import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="container mx-auto p-4 mt-10">
            <h1 className="text-5xl font-bold text-center mb-6">404</h1>
            <h2 className="text-2xl font-bold text-center mb-4">Страница не найдена</h2>
            <p className="text-gray-600 text-center">
                Кажется, вы заблудились. Давайте поможем вам вернуться на главную страницу.
            </p>
            <div className="mt-8 text-center">
                <Link
                    href="/"
                    className="text-blue-500 hover:underline text-2xl"
                >
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
};

export default NotFound;