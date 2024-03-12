import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
    const { productId } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index);
        if (index === 0) {
            // window.location.href = 'http://localhost:3000/#home';
        } else if (index === 1) {
            // window.location.href = 'http://localhost:3000/#product';
        }
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

            <div style={{ display: 'flex', marginLeft: '5%', padding: '2% 5%' }}>
                <div style={{ width: "50%" }}>
                    <img className="product-detail-image" src={require("../image/home/4.png")} alt="Shirt Store Logo" />
                </div>
                <div style={{ width: "50%" }}>
                    <div className="title-image">QUẦN KAKI TÚI NHỎ KIỂU FORM SLIMFIT QK026 MÀU XÁM</div>

                    <div style={{ padding: '2% 0', fontSize: '18px' }}>
                        Giá bán: <div className='product-price'>$15.99</div>
                    </div>
                    <div style={{ borderBottom: '2px solid #ccc', paddingBottom: '2%' }}>
                        <div style={{ fontSize: '18px' }}>
                            Màu khác<span style={{ color: 'red' }}> *</span>:
                        </div>
                        <img className="product-detail-view" src={require("../image/home/4.png")} alt="Shirt Store Logo" />
                    </div>

                    <div style={{ display: 'flex', paddingTop: '2%' }}>
                        <div style={{ width: '50%', paddingRight: '1%' }} >
                            <div style={{ fontSize: '16px' }}>
                                SIZE
                                <span style={{ color: 'red' }}> *</span>
                                <span style={{ fontSize: '14px', fontStyle: 'italic', color: 'red', paddingLeft: '4%' }}>Hướng dẫn chọn size</span>
                            </div>

                            <select style={{ width: '100%', padding: '2%', fontSize: '16px', backgroundColor: '#ccc', color: 'black', borderRadius: '5px', position: 'relative', zIndex: '1' }}>
                                <option selected>Chọn size</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div style={{ fontSize: '16px' }}>
                                SỐ LƯỢNG<span style={{ color: 'red' }}> *</span>:
                            </div>
                            <select style={{ width: '100%', padding: '2%', fontSize: '16px', backgroundColor: '#ccc', color: 'black', borderRadius: '5px', position: 'relative', zIndex: '1' }}>
                                <option selected>Chọn số lượng</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>

                    </div>

                    <div style={{ paddingTop: '5%', display: 'flex' }}>
                        <div style={{width:'50%',padding:' 0 2.5%'}}>
                            <button className='btn-signup'><FontAwesomeIcon icon={faShoppingBasket} /> Mua hàng</button>
                        </div>
                        <div style={{width:'45%',padding:'0% 0 0 6.5%'}}>
                            <button className='btn-add'><FontAwesomeIcon icon={faPlus} />Thêm vào giỏ hàng</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductDetail;
