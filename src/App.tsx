import { Suspense } from "react"
import ProductsList from "./components/ui/ProductsList/ProductsList"
import { fetchProducts } from "./api"
import ProductListSkeleton from "./components/skeletons/ProductListSkeleton/ProductListSkeleton"

function App() {
  const productsPromise = fetchProducts()
  return (
    <div>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductsList productsPromise={productsPromise} />
      </Suspense>
    </div>
  )
}

export default App
