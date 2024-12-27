'use client';
import { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { IProduct } from '../../../types';

interface IProductsListProps {
    productsPromise: Promise<{ products: IProduct[] }>;
}

export default function ProductsList({ productsPromise }: IProductsListProps) {
    const products: IProduct[] = use(productsPromise).products
    return (
        <section>
            <div className='container'>
                <div className='grid grid-cols-5 gap-x-4 gap-y-9'>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
