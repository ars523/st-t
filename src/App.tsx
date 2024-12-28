import { Suspense } from "react"
import ProductsList from "./components/ui/ProductsList/ProductsList"
import { fetchProducts } from "./api"
import ProductListSkeleton from "./components/skeletons/ProductListSkeleton/ProductListSkeleton"
import { CartProvider } from "./context/cartContext"

function App() {
  const productsPromise = fetchProducts()
  return (
    <CartProvider>
      <div>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductsList productsPromise={productsPromise} />
        </Suspense>
      </div>
    </CartProvider>
  )
}

export default App
