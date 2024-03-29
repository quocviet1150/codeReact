import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../store/actions/cart';

export default function Cart() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectAll, setSelectAll] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const {products} = useSelector(state=>state.cart)
    const disptach = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
        }, 500);
    }, []);

    //   if (isLoading) {
    //     return (
    //         <div className="loading-container">
    //             <div className="loading-spinner"></div>
    //             <div>Loading...</div>
    //         </div>
    //     );
    // }

    const handleSelectAll = (e) => {
        setSelectAll(e.target?.checked);
        // setProducts(products.map(product => ({ ...product, checked: e.target?.checked })));
    };

    const handleCheckboxChange = (e, productId) => {
        const updatedProducts = products.map(product =>
            product?.id === productId ? { ...product, checked: e.target?.checked } : product
        );
        // setProducts(updatedProducts);
        setSelectAll(updatedProducts.every(product => product?.checked));
        console.log(updatedProducts);
    };

    const openConfirmation = (productId) => {
        disptach(deleteCart(productId))
    };

    return (
        <>
            <div className="header_1">
                <div className="header" style={{ padding: '25px 0', }}>
                    <div className="logo-container" onClick={() => window.location.href = "http://localhost:3000"} style={{ width: '50%' }}>
                        <div style={{ borderRight: '1px solid #ccc', paddingRight: '2%' }}>
                            <img className="logo" src="https://img.freepik.com/premium-vector/tshirt-logo-clothing-logo-apparel-store-icon-fashion-logo-design-tshirt-icon-template_657888-112.jpg" alt="Shirt Store Logo" />
                            <span className="store-name">Shirt Store</span>
                        </div>
                        <div style={{ paddingLeft: '10%', fontSize: '30px' }}>
                            <div>CART</div>
                        </div>
                    </div>

                    <div class="search-container">
                        <input type="text" placeholder="Tìm kiếm sản phẩm..." class="search-input" />
                        <button class="search-button">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="cart-table">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
                            <th>Sản phẩm</th>
                            <th>Màu sắc</th>
                            <th>Size</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product?.id}>
                                <td><input type="checkbox" checked={product?.checked} onChange={(e) => handleCheckboxChange(e, product?.id)} /></td>
                                <td>
                                    <div className="product-info">
                                        <img src={product?.image} alt={product?.name} />
                                        <span>{product?.name}</span>
                                    </div>
                                </td>
                                <td>{product?.color}</td>
                                <td>{product?.size}</td>
                                <td>{product?.price}</td>
                                <td>{product?.quantity}</td>
                                <td>{product?.total}</td>
                                <td> <button onClick={() => openConfirmation(product?.cartId)}>Xóa</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}