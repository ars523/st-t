'use client';
import { use } from 'react';

interface IProduct {
    id: number;
    title: string;
    thumbnail: string;
    discountPercentage: number;
    price: number;
    brand: string;
}

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
                        <div key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div className='p-2 flex flex-col gap-y-2'>
                                <h6 className='font-bold'>{product.brand}</h6>
                                <h3 className='text-base font-medium'>{product.title}</h3>
                                <p className='font-semibold'>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
