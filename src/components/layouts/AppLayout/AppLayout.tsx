function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-6">
            {
                children
            }
        </div>
    )
}

export default AppLayout