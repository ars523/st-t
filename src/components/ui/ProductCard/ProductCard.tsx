import { IProduct } from "../../../types"
import wish from "../../../assets/icons/wish.png"
import cartIcon from "../../../assets/icons/cart.png"
import eye from "../../../assets/icons/eye.png"
import trash from "../../../assets/icons/trash.png"
import plus from "../../../assets/icons/plus.png"
import connector from "../../../assets/icons/connector.png"
import tail from "../../../assets/icons/tail.png"
import { use } from "react"
import { CartContext } from "../../../context/cartContext"
import cn from "../../../lib/cn"

function ProductCard({ product }: { product: IProduct }) {
    const { cart, dispatchCart } = use(CartContext) || {}

    const alreadyInCart = cart?.find((item) => item.id === product.id)

    const handleAddToCart = (product: IProduct) => {
        if (dispatchCart) {
            dispatchCart({ type: 'ADD_TO_CART', payload: product })
        }
    }

    const handleDeleteFromCart = (product: IProduct) => {
        if (dispatchCart) {
            dispatchCart({ type: 'REMOVE_FROM_CART', payload: product })
        }
    }

    function calculateDiscountAmount(price: number, discountPercentage: number) {
        return ((price * discountPercentage) / 100).toFixed(2);
    }

    return (
        <div className={
            cn(
                "group transition-all duration-200 ease-in-out rounded-lg relative",
                {
                    "shadow-cardShadow": alreadyInCart,
                    "hover:shadow-cardShadow": !alreadyInCart,
                }
            )
        }
        >
            <div className="w-full aspect-square relative">
                <img
                    className="w-full h-full object-cover rounded-lg bg-[#ebe6e6]"
                    src={product.thumbnail}
                    alt={product.title}
                />
                <div className={
                    cn(
                        "absolute w-full h-full z-10 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 transition-all duration-200 ease-in-out rounded-lg flex items-center justify-center",
                        {
                            "bg-opacity-[33%]": alreadyInCart,
                            "group-hover:bg-opacity-[33%]": !alreadyInCart
                        }
                    )
                }>
                    <button className={
                        cn(
                            "opacity-0 absolute top-[10px] right-[10px] z-20",
                            {
                                "opacity-100": alreadyInCart,
                                "group-hover:opacity-100": !alreadyInCart
                            }
                        )
                    }>
                        <img src={wish} className="w-[23.33px] h-[21px]" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 z-40 flex flex-col items-center justify-center gap-y-2 py-3">
                        {
                            alreadyInCart ? (
                                <div
                                    className="flex justify-between h-8 w-[186px] bg-cgreen-500 text-sm font-medium backdrop-blur-[8px] text-white rounded-md items-center"
                                >
                                    <button onClick={() => handleDeleteFromCart(product)}>
                                        <img src={trash} className="w-5 h-5 ml-3" />
                                    </button>
                                    <span>{alreadyInCart.quantity} Added in Cart</span>
                                    <button onClick={() => handleAddToCart(product)}>
                                        <img src={plus} className="w-5 h-5 mr-3" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="group-hover:flex gap-1 h-8 w-[186px] hidden text-sm font-medium backdrop-blur-[8px] text-white rounded-md border-[1.5px] border-[#FFFFFF4D] items-center justify-center bg-[#FFFFFF4D]"
                                >
                                    <img src={cartIcon} className="w-[23.33px] h-[21px]" />
                                    Add to Cart
                                </button>
                            )
                        }
                        <button
                            className={
                                cn(
                                    "gap-1 h-8 w-[186px] hidden text-sm font-medium backdrop-blur-[8px] text-white rounded-md border-[1.5px] border-[#FFFFFF4D] items-center justify-center bg-[#FFFFFF4D]",
                                    {
                                        "flex": alreadyInCart,
                                        "group-hover:flex": !alreadyInCart
                                    }
                                )
                            }
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
            {
                product.discountPercentage ? (
                    <div className="bg-discount-gradient top-[11px] absolute -left-[4px] z-50 w-[53px] h-6 rounded-tl-[4px] flex items-center justify-center">
                        <img src={connector} className="w-1 absolute z-50 h-[6px] left-0 -bottom-[6px]" />
                        <img src={tail} className="absolute z-50 h-6 w-3 -right-[11px] top-0" />
                        <span className="text-xs font-medium leading-[14px] text-white">- ৳ {calculateDiscountAmount(product.price, product.discountPercentage)}</span>
                    </div>
                ) : null
            }

        </div>
    )
}

export default ProductCard