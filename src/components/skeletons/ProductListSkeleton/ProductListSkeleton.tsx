function ProductListSkeleton() {
    return (
        <div className="container">
            <div className="grid grid-cols-5 gap-x-4 gap-y-9">
                {[...Array(10)].map((_, index) => (
                    <div key={index}>
                        <div className="w-full rounded-lg aspect-square bg-gray-200 animate-pulse" />
                        <div className="p-2 flex flex-col gap-y-2">
                            <div className="w-20 h-5 bg-gray-200 animate-pulse"></div>
                            <div className="w-full h-11 bg-gray-200 animate-pulse"></div>
                            <div className="w-24 h-[22px] bg-gray-200 animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductListSkeleton