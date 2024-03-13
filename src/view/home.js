import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetchData();

        // cái setTimeout xóa đi khi calll api
        setTimeout(() => {
            setIsLoading(!isLoading);
        }, 500);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://your-backend-api-url');
            setData(response.data);
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

    const images = [
        {
            id: 1,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh Mô tả ảnh Mô tả ảnh Mô tả ảnh Mô tả ảnh 1",
            price: 10.99
        },
        {
            id: 2,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 2",
            price: 15.99
        },
        {
            id: 3,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 3",
            price: 15.99
        },
        {
            id: 4,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 4",
            price: 15.99
        },
        {
            id: 5,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 5",
            price: 15.99
        },
        {
            id: 6,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 6",
            price: 15.99
        },
        {
            id: 7,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 7",
            price: 15.99
        },
        {
            id: 8,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 8",
            price: 15.99
        },
        {
            id: 9,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 9",
            price: 15.99
        },
        {
            id: 10,
            imagePath: require("../image/home/4.png"),
            name: "Mô tả ảnh 10",
            price: 15.99
        },
    ];


    return (
        <>
            <div className="header_1">
                <div className="header">
                    <div className="logo-container" onClick={() => window.location.href = "http://localhost:3000"}>
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
                        <FontAwesomeIcon icon={faShoppingCart} className="search-icon" />
                    </div>

                    <div className="cart">
                        <FontAwesomeIcon icon={faUser} className="search-icon" />
                    </div>

                    <div className="cart">
                        <FontAwesomeIcon icon={faHeart} className="search-icon" />
                    </div>
                </div>
            </div>

            <div className="home" id="home">
                <div className='image'>
                    <img className="image_home" src={require("../image/home/1.png")} alt="Shirt Store Logo" />

                    <div className="text-overlay">

                        <div className="font_home">Enjoy This </div>
                        <div className="font_home">Winter Trend </div>
                        <div className="font_title">Discover now latest collection </div>
                        <div className="button_click">
                            <button className="button" onClick={() => window.location.href = "http://localhost:3000/product#product"}>shop now </button>
                        </div>
                    </div>
                </div>

                <div className="image-child">

                    <div className="image_child">
                        <img className="image_one" src={require("../image/home/2.png")} alt="Shirt Store Logo" />
                    </div>

                    <div className="image_child2">
                        <img className="image_two" src={require("../image/home/3.png")} alt="Shirt Store Logo" />
                    </div>

                    <div className="image_child2">
                        <img className="image_two" src={require("../image/home/3.png")} alt="Shirt Store Logo" />
                    </div>

                </div>
            </div>
            <div className="product" id="product">
                <div className='title-product'>
                    Featured Products
                </div>
                <div className="image-product-container">
                    {images.map((image, index) => (
                        <div className="image-product" key={index}>
                            <a className="product-link" onClick={() => handleProductClick(image.id)}>
                                <img className="product-image" src={image.imagePath} alt={image.name} />
                                <p className="name" title={image.name}>{image.name}</p>
                                <p className="price"><b>Price:</b> ${image.price}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
