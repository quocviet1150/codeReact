import { faPlus, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Instructions from "./instructions";

const ProductDetail = () => {
    const { productId } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
        }, 500);
    }, []);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

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
            window.location.href = 'http://localhost:3000/#home';
        } else if (index === 1) {
            window.location.href = 'http://localhost:3000/#product';
        }
    };

    const images = [
        { idDetail: 1, path: require("../image/home/4.png") },
        { idDetail: 2, path: require("../image/home/2.png") },
        { idDetail: 3, path: require("../image/home/1.png") },
        { idDetail: 4, path: require("../image/home/3.png") }
    ];

    return (
        <>
            {/* <div className="header_1">
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
            </div> */}

            <div style={{ display: 'flex', marginLeft: '5%', padding: '2% 5%' }}>
                <div style={{ width: "50%" }}>
                    <img className="product-detail-image" src={require("../image/home/4.png")} alt="Shirt Store Logo" />
                </div>
                <div style={{ width: "50%" }}>
                    <div className="title-image">QUẦN KAKI TÚI NHỎ KIỂU FORM SLIMFIT QK026 MÀU XÁM</div>

                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', paddingTop: '1%' }}>
                        <div style={{ marginRight: '10px', borderRight: '1px solid #ccc', paddingRight: '5px' }}>
                            <span>Đánh giá: </span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                        </div>
                        <span style={{ marginRight: '10px', borderRight: '1px solid #ccc', paddingRight: '5px' }}>Đánh giá: 100</span>
                        <span style={{ marginRight: '10px' }}>Đã bán: 500</span>
                    </div>

                    <div style={{ padding: '2% 0', fontSize: '18px' }}>
                        Giá bán: <div className='product-price'>$15.99</div>
                    </div>
                    <div style={{ borderBottom: '2px solid #ccc', paddingBottom: '2%' }}>
                        <div style={{ fontSize: '18px' }}>
                            Màu khác<span style={{ color: 'red' }}> *</span>:
                        </div>
                        <div className="product-images">
                            {images.map(image => (
                                <img key={image.idDetail} className="product-detail-view" src={image.path} alt={`Shirt Store Image ${image.idDetail}`} />
                            ))}
                        </div>
                    </div>

                    <div style={{ paddingTop: '4%' }}>
                        <div style={{ width: '50%', display: 'flex' }} >
                            <div style={{ fontSize: '16px', width: '30%' }}>
                                Size
                                <span style={{ color: 'red' }}> *</span>:

                            </div>
                            <div style={{ width: '70%' }}>

                                <select className='select'>
                                    <option selected value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                </select>
                                <div>
                                    <span style={{ fontSize: '14px', fontStyle: 'italic', color: 'red', paddingTop: '2%', cursor: 'pointer' }}
                                        onClick={togglePopup}>
                                        Hướng dẫn chọn size</span>
                                    {isPopupVisible && <Instructions isPopupVisible={isPopupVisible} togglePopup={togglePopup} />}
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '60%', paddingTop: '3%', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '30%', fontSize: '16px' }}>
                                Số Lượng<span style={{ color: 'red' }}> *</span>:
                            </div>
                            <div className="quantity-selector">
                                <button className="decrement-btn" onClick={decrementQuantity} style={{ background: '#ffffff', border: '1px solid #ccc', borderRight: 'none' }}>-</button>
                                <input
                                    style={{ outline: 'none' }}
                                    type="number"
                                    className="quantity-input"
                                    value={quantity}
                                    min={1}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                />
                                <button className="increment-btn" onClick={incrementQuantity} style={{ background: '#ffffff', border: '1px solid #ccc', borderLeft: 'none' }}>+</button>
                            </div>

                            <div style={{ paddingLeft: '5%' }}>9999 sản phẩm có sẵn</div>
                        </div>

                    </div>

                    <div style={{ paddingTop: '4%', display: 'flex' }}>
                        <div style={{ width: '50%', padding: ' 0 2.5%' }}>
                            <button className='btn-signup'><FontAwesomeIcon icon={faShoppingBasket} /> Mua hàng</button>
                        </div>
                        <div style={{ width: '45%', padding: '0% 0 0 6.5%' }}>
                            <button className='btn-add'><FontAwesomeIcon icon={faPlus} /> Thêm vào giỏ hàng</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductDetail;
