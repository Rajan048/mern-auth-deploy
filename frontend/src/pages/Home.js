import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('loggedInUser');
        setLoggedInUser(name);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('Logged out successfully');
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    const fetchProducts = async () => {
        try {
            const url = "https://mern-auth-deploy-api.vercel.app/products";
            const token = localStorage.getItem('token');

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    authorization: token,  // ✅ RAW token
                }
            });

            const result = await response.json();
            console.log("PRODUCTS:", result);
            setProducts(result);

        } catch(err) {
            handleError(err.message || "Something went wrong");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>{loggedInUser}</h1>
            <button className="logout-button" onClick={handleLogout}>Logout</button>

            <div>
                {products.length > 0 ? (
                    products.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price}</span>
                        </ul>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Home;
