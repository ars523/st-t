import { ErrorBoundary as EB } from "react-error-boundary";
import Error from "../Error/Error";
function ErrorBoundary({ children }: { children: React.ReactNode }) {
    return (
        <EB fallback={<Error />}>
            {children}
        </EB>
    )
}

export default ErrorBoundary