import { Suspense } from "react"
import ProductsList from "./components/ui/ProductsList/ProductsList"
import { fetchProducts } from "./api"
import ProductListSkeleton from "./components/skeletons/ProductListSkeleton/ProductListSkeleton"
import { CartProvider } from "./context/cartContext"
import AppLayout from "./components/layouts/AppLayout/AppLayout"

function App() {
  const productsPromise = fetchProducts()
  return (
    <CartProvider>
      <AppLayout>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductsList productsPromise={productsPromise} />
        </Suspense>
      </AppLayout>
    </CartProvider>
  )
}

export default App
