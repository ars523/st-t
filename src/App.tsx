import { Suspense } from "react"
import ProductsList from "./components/ui/ProductsList/ProductsList"
import { fetchProducts } from "./api"
import ProductListSkeleton from "./components/skeletons/ProductListSkeleton/ProductListSkeleton"
import { CartProvider } from "./context/cartContext"

function App() {
  const productsPromise = fetchProducts()
  return (
    <CartProvider>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductsList productsPromise={productsPromise} />
      </Suspense>
    </CartProvider>
  )
}

export default App
