import { Suspense } from "react"
import ProductsList from "./components/ui/ProductsList/ProductsList"
import { fetchProducts } from "./api"

function App() {
  const productsPromise = fetchProducts()
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsList productsPromise={productsPromise} />
      </Suspense>
    </div>
  )
}

export default App
