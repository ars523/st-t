import { IProduct } from "../../../types"
import wish from "../../../assets/icons/wish.png"
import cart from "../../../assets/icons/cart.png"
import eye from "../../../assets/icons/eye.png"
function ProductCard({ product }: { product: IProduct }) {
    return (
        <div className="group hover:shadow-cardShadow transition-all duration-200 ease-in-out rounded-lg cursor-pointer">
            <div className="w-full aspect-square relative">
                <img
                    className="w-full h-full object-cover rounded-lg bg-[#ebe6e6]"
                    src={product.thumbnail}
                    alt={product.title}
                />
                <div className="absolute w-full h-full z-10 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-[33%] transition-all duration-200 ease-in-out rounded-lg flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 absolute top-[10px] right-[10px] z-20">
                        <img src={wish} className="w-[23.33px] h-[21px]" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 z-40 flex flex-col items-center justify-center gap-y-2 py-3">
                        <button
                            className="group-hover:flex gap-1 h-8 w-[186px] hidden text-sm font-medium backdrop-blur-[8px] text-white rounded-md border-[1.5px] border-[#FFFFFF4D] items-center justify-center bg-[#FFFFFF4D]"
                        >
                            <img src={cart} className="w-[23.33px] h-[21px]" />
                            Add to Cart
                        </button>
                        <button
                            className="group-hover:flex gap-1 h-8 w-[186px] hidden text-sm font-medium backdrop-blur-[8px] text-white rounded-md border-[1.5px] border-[#FFFFFF4D] items-center justify-center bg-[#FFFFFF4D]"
                        >
                            <img src={eye} className="w-[16.67px] h-[14.26px]" />
                            Quick View
                        </button>
                    </div>
                </div>
            </div>
            <div className='p-2 flex flex-col gap-y-2'>
                <div className="flex flex-col gap-y-[2px]">
                    <h6 className='text-dark-700 text-sm'>{product.brand}</h6>
                    <h3 className='text-base line-clamp-2 leading-[22px] text-dark-900 font-semibold'>{product.title}</h3>
                </div>
                <p className='font-normal text-xl leading-[22px] py-[3px] text-primary-500 flex items-center gap-[3px]'>
                    <span>৳</span>
                    <span>{product.price}</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard