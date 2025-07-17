import { FC } from 'react';
import { format } from 'date-fns';

interface Props {
    generationTime: string;
}

const About: FC<Props> = ({ generationTime }) =>  (
        <div className="container mx-auto p-4 mt-10">
            <h1 className="text-3xl font-bold mb-4">О нас</h1>
            <p className="text-gray-600">
                Это тестовое приложение для демонстрации работы с Next.js. Приложение показывает, как
                работать с различными типами рендеринга: CSR, SSR и SSG.
            </p>
            <div className="mt-8">
                <p className="font-bold">Дата генерации страницы:</p>
                <p className="text-gray-600">{generationTime}</p>
            </div>
            <div className="mt-8">
                <a
                    href="/"
                    className="text-blue-500 hover:underline"
                >
                    Вернуться к списку продуктов
                </a>
            </div>
        </div>
    );

export const revalidate = 0;

export default async function Page() {
    const generationTime = format(new Date(), 'dd.MM.yyyy HH:mm:ss');

    return <About generationTime={generationTime} />;
}