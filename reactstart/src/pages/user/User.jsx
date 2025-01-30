import { useParams, Navigate, Outlet, useLocation, Link } from "react-router-dom";
export default function User() {
    const { userId } = useParams();
    console.log(userId);

    const location = useLocation();

    if (isNaN(Number(userId))) {
        return <Navigate to="/" />;
    }

    const isDashboard = location.pathname.includes("dashboard");

    return (
        <>
            {!isDashboard ? (
                <div>
                    User: {userId} <Link to="dashboard">Dashboard</Link>
                </div>
            ) : (
                <Outlet />
            )}
        </>
    );
}
