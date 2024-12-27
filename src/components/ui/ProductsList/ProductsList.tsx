'use client';
import { use } from 'react';

interface IProduct {
    id: number;
    title: string;
    thumbnail: string;
}

interface IProductsListProps {
    productsPromise: Promise<{ products: IProduct[] }>;
}

export default function ProductsList({ productsPromise }: IProductsListProps) {
    const products: IProduct[] = use(productsPromise).products
    return (
        <div className='grid grid-cols-4 gap-4'>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                </div>
            ))}
        </div>
    )
}
