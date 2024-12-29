import { Suspense } from "react"
import ProductsList from "./components/ui/ProductsList/ProductsList"
import { fetchProducts } from "./api"
import ProductListSkeleton from "./components/skeletons/ProductListSkeleton/ProductListSkeleton"
import { CartProvider } from "./context/cartContext"
import AppLayout from "./components/layouts/AppLayout/AppLayout"
import ErrorBoundary from "./components/ui/ErrorBoundary/ErrorBoundary"

function App() {
  const productsPromise = fetchProducts()
  return (
    <CartProvider>
      <AppLayout>
        <ErrorBoundary>
          <Suspense fallback={<ProductListSkeleton />}>
            <ProductsList productsPromise={productsPromise} />
          </Suspense>
        </ErrorBoundary>
      </AppLayout>
    </CartProvider>
  )
}

export default App
