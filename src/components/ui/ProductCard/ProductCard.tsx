import { IProduct } from "../../../types"

function ProductCard({ product }: { product: IProduct }) {
    return (
        <div key={product.id}>
            <div className="w-full aspect-square">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={product.thumbnail}
                    alt={product.title}
                />
            </div>
            <div className='p-2 flex flex-col gap-y-2'>
                <h6 className='text-dark-700 text-sm'>{product.brand}</h6>
                <h3 className='text-base line-clamp-2 leading-[22px] text-dark-900 font-medium'>{product.title}</h3>
                <p className='font-normal text-xl leading-[22px] text-primary-500 flex items-center gap-[3px]'>
                    <span>৳</span>
                    <span>{product.price}</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard