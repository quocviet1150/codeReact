import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Shirts');
            setData(response.data);
            console.log(response.data);
            setIsLoading(!isLoading);
        } catch (error) {
            setError(error);
            setIsLoading(!isLoading);
        }
    };

    //  khi call data thì cái item sẽ được lấy theo : "{kiểu.id}"
    // if (error) return <div>Error: {error.message}</div>;

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <div>Loading...</div>
            </div>
        );
    }

    const handleItemClick = (index) => {
        setSelectedItem(index);
        if (index === 0) {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        } else if (index === 1) {
            document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleCart = () => {
        navigate(`/product/cart`);
    };


    return (
        <>
            <div className="header_1">
                <div className="header">
                    <div className="logo-container" onClick={() => window.location.href = "http://localhost:3000/product"}>
                        <img className="logo" src="https://img.freepik.com/premium-vector/tshirt-logo-clothing-logo-apparel-store-icon-fashion-logo-design-tshirt-icon-template_657888-112.jpg" alt="Shirt Store Logo" />
                        <span className="store-name">Shirt Store</span>
                    </div>
                    <div className="menu">
                        <ul>
                            <li className={selectedItem === 0 ? 'selected' : ''} onClick={() => handleItemClick(0)}><a href="#home">Home</a></li>
                            <li className={selectedItem === 1 ? 'selected' : ''} onClick={() => handleItemClick(1)}><a href="#product">Product</a></li>
                        </ul>
                    </div>
                    <div className="cart">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>

                    <div className="cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="search-icon" onClick={() => handleCart()} />
                    </div>

                    <div className="cart">
                        <FontAwesomeIcon icon={faUser} className="search-icon" />
                    </div>
                </div>
            </div>

            <div className="home" id="home">
                <div className='image'>
                    <img className="image_home" src={require("../image/home/1.png")} alt="Shirt Store Logo" />

                    {/* <div className="text-overlay">

                        <div className="font_home">Enjoy This </div>
                        <div className="font_home">Winter Trend </div>
                        <div className="font_title">Discover now latest collection </div>
                        <div className="button_click">
                            <button className="button" onClick={() => window.location.href = "http://localhost:3000/product#product"}>shop now </button>
                        </div>
                    </div> */}
                </div>

                <div className="image-child">

                    <div className="image_child">
                        <img className="image_one" src={require("../image/home/2.png")} alt="Shirt Store Logo" />
                    </div>

                    <div className="image_child2">
                        <img className="image_two" src={require("../image/home/3.png")} alt="Shirt Store Logo" />
                    </div>

                    <div className="image_child2">
                        <img className="image_two" src={require("../image/home/8.png")} alt="Shirt Store Logo" />
                    </div>

                </div>
            </div>
            <div className="product" id="product">
                <div className='title-product'>
                    Featured Products
                </div>
                <div className="image-product-container">
                    {data.map((image, index) => (
                        <div className="image-product" key={index}>
                            <a className="product-link" onClick={() => handleProductClick(image?.item1?.id)}>
                                <img className="product-image" src={"http://localhost:5000/api/images/" + image?.item2[0]?.imgPath} alt={image?.item1?.name} />
                                <p className="name" title={image?.item1?.name}>{image?.item1?.name}</p>
                                <p className="price"><b>Price:</b> ${image?.item1?.price}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
