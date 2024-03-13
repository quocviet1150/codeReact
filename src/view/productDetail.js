import { faHeart, faPlus, faSearch, faShoppingBasket, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Instructions from "./instructions";
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const images = [
        { idDetail: 1, path: require("../image/home/4.png") },
        { idDetail: 2, path: require("../image/home/2.png") },
        { idDetail: 3, path: require("../image/home/1.png") },
        { idDetail: 4, path: require("../image/home/3.png") }
    ];

    const product =
    {
        name: "Quần kaki túi nhỏ kiểu form slimfit QK026 màu xám",
        price: 10.99,
        path: require("../image/home/4.png"),
        quantityRemaining: 100,
        quantityFeedback: 50,
        sellNumber: 500
    }

    const imagePaths = {
        0: [
            require("../image/home/1.png"),
            require("../image/home/2.png"),
        ],
        1: [
            require("../image/home/1.png"),
            require("../image/home/2.png"),
            require("../image/home/3.png"),
            require("../image/home/4.png"),
            require("../image/home/4.png"),
            require("../image/home/4.png"),
            require("../image/home/4.png"),
        ],
        2: [
            require("../image/home/2.png"),
            require("../image/home/3.png"),
        ],
        3: [
            require("../image/home/4.png"),
            require("../image/home/4.png"),
        ],
        4: [
            require("../image/home/1.png"),
        ]
    };

    const { productId } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [selectedImagePath, setSelectedImagePath] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
        }, 500);
        setSelectedImagePath(product.path);
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
            window.location.href = 'http://localhost:3000/product#home';
        } else if (index === 1) {
            window.location.href = 'http://localhost:3000/product#product';
        }
    };

    const handleProductClick = (id, imagePath) => {
        setSelectedProductId(id);
        setSelectedImagePath(imagePath);
    };

    const handleImageClick = (path) => {
        setSelectedImagePath(path);
    };

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

            <div className="breadcrumb">
                <Link to="/product" className="breadcrumb-item-hover">Product</Link>
                <span className="breadcrumb-divider">/</span>
                <span className="breadcrumb-item">{product.name}</span>
            </div>

            <div style={{ display: 'flex', marginLeft: '5%', padding: '0% 5%' }}>
                <div style={{ width: "10%", height: '85vh', overflowY: 'auto', cursor: 'pointer' }}>
                    {(selectedProductId === null ? imagePaths[0] : imagePaths[selectedProductId]).map((path, index) => (
                        <img
                            key={index}
                            className="product-detail-view-total"
                            src={path}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(path)}
                        />
                    ))}
                </div>
                <div style={{ width: "45%" }}>
                    <img className="product-detail-image" src={selectedImagePath} alt="Shirt Store Logo" />
                </div>
                <div style={{ width: "45%" }}>
                    <div className="title-image">{product.name.toLowerCase()}</div>

                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', paddingTop: '1%' }}>
                        <div style={{ marginRight: '10px', borderRight: '1px solid #ccc', paddingRight: '5px' }}>
                            <span ><b>Đánh giá:</b> </span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                            <span style={{ color: '#fadb14', marginRight: '5px' }}>★</span>
                        </div>
                        <span style={{ marginRight: '10px', borderRight: '1px solid #ccc', paddingRight: '5px' }}><b>Phản hồi:</b> {product.quantityFeedback}</span>
                        <span style={{ marginRight: '10px' }}><b>Đã bán:</b> {product.sellNumber}</span>
                    </div>

                    <div style={{ padding: '4% 0 2% 0', fontSize: '18px' }}>
                        <b>Giá bán:</b> <div className='product-price'>${product.price}</div>
                    </div>

                    <div style={{ paddingBottom: '4%', display: 'flex' }}>
                        <div style={{ fontSize: '18px', width: '20%' }}>
                            <b>Chính sách trả hàng:</b>
                        </div>
                        <div style={{ fontSize: '16px', width: '80%' }}>
                            <img style={{ height: '2vh', paddingRight: '2%' }} src={require("../image/home/free2.png")} alt={"test"} />
                            Trả hàng 15 ngày <i style={{fontSize:'14px',paddingLeft:'3%'}}>Đổi ý miễn phí</i>

                        </div>
                    </div>

                    <div style={{ paddingBottom: '4%', display: 'flex' }}>
                        <div style={{ fontSize: '18px', width: '20%' }}>
                            <b>Vận chuyển:</b>
                        </div>
                        <div style={{ fontSize: '16px', width: '80%' }}>
                            <img style={{ height: '2vh', paddingRight: '2%' }} src={require("../image/home/free.png")} alt={"test"} />
                            Miễn phí vận chuyển
                        </div>
                    </div>

                    <div style={{ borderBottom: '2px solid #ccc', paddingBottom: '2%' }}>
                        <div style={{ fontSize: '18px' }}>
                            <b>Mẫu khác<span style={{ color: 'red' }}> *</span>:</b>
                        </div>
                        <div className="product-images">
                            {images.map((image) => (
                                <img
                                    key={image.idDetail}
                                    className="product-detail-view"
                                    src={image.path}
                                    alt={`Shirt Store Image ${image.idDetail}`}
                                    onClick={() => handleProductClick(image.idDetail, image.path)}
                                />
                            ))}
                        </div>
                    </div>

                    <div style={{ paddingTop: '4%' }}>
                        <div style={{ width: '50%', display: 'flex' }} >
                            <div style={{ fontSize: '16px', width: '50%' }}>
                                <b>Size
                                    <span style={{ color: 'red' }}> *</span>:</b>
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
                                    <span className='instruction'
                                        onClick={togglePopup}>
                                        Hướng dẫn chọn size</span>
                                    {isPopupVisible && <Instructions isPopupVisible={isPopupVisible} togglePopup={togglePopup} />}
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '60%', paddingTop: '3%', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '40%', fontSize: '16px' }}>
                                <b>Số Lượng<span style={{ color: 'red' }}> *</span>:</b>
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

                            <div style={{ paddingLeft: '5%' }}>{product.quantityRemaining} sản phẩm có sẵn</div>
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
