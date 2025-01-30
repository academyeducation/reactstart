import { useState, useEffect } from "react";
import { useParams, Navigate, Outlet, useLocation, Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
    console.log("Fetching with fetcher from API...");
    const res = await axios.get(url);
    return res.data;
};

export default function User() {
    const [fetchData, setFetchData] = useState([]);
    const [error, setError] = useState(null);
    const { userId } = useParams();
    console.log(userId);

    const { data, errorSWR } = useSWR(`https://swapi.dev/api/people/${userId}?format=json`, fetcher, {
        dedupingInterval: 86400000, // 24 hours in millseconds
        revalidateOnMount: true, // Prevent re-fetching on mount
        revalidateOnFocus: true, // Disable refetching when tab regains focus
        revalidateIfStale: true, // Don't fetch stale data automatically
    });

    const location = useLocation();

    if (isNaN(Number(userId))) {
        return <Navigate to="/" />;
    }

    //     useEffect(() => {
    //         axios
    //             .get(`https://swapi.dev/api/people/${userId}?format=json`)
    //             .then((response) => setFetchData(response.data))
    //             .catch((error) => setError(error));

    //         /*
    //         AXIOS POST EXAMPLE
    //        axios .post("https://example.com/api", { name: "John", age: 30, })
    //             .then((response) => console.log(response.data))
    //             .catch((error) => console.error("Error:", error));
    //             */

    //         /* fetch(`https://swapi.dev/api/people/${userId}?format=json`)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log("Fetch data:", data);
    //                 setFetchData(data);
    //                 setLoading(false);
    //             }); */
    // }, []);

    if (errorSWR) {
        return <p>Error: {error}</p>;
    }

    if (!data) {
        return <p>Laddar...</p>;
    }

    const isDashboard = location.pathname.includes("dashboard");

    return (
        <>
            {!isDashboard ? (
                <div>
                    User: {userId} <Link to="dashboard">Dashboard</Link>
                    <div>
                        {data && (
                            <div>
                                <h1>User data</h1>
                                <p>{data.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <Outlet />
            )}
        </>
    );
}
