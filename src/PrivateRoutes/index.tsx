import { Navigate ,Route } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const { authenticated } = useAuthContext();

    return (
        <Route {...rest} render={({props}: any) => (
            authenticated ? (
                <Component {...props} />
            ) : (
                <Navigate replace to="/" />
            )
        )} />
    )
}