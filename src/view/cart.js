import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, productCheck, productCheckFilter, searchCart, searchCartStart } from '../store/actions/cart';

export default function Cart() {
    const [isLoading, setIsLoading] = useState(true);
    const [listChecked, setListChecked] = useState([]);
    const [search, setSearch] = useState(false);
    const [keySearch, setKeySerch] = useState("");
    const [selectAll, setSelectAll] = useState(false);
    const { products } = useSelector(state => state.cart)
    const { productSearch } = useSelector(state => state.cart)
    const { productChecked } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
        }, 500);
    }, []);

      if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <div>Loading...</div>
            </div>
        );
    }

    const handleSelectAll = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            const allCartIds = products.map(product => product.cartId);
            setListChecked(allCartIds);
            dispatch(productCheck(allCartIds));
        } else {
            setListChecked([]);
            dispatch(productCheck([]));
        }
        setSelectAll(!selectAll)
    };



    const handleCheckboxChange = (e) => {
        const newValue = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setListChecked(prevListChecked => {
                const updatedList = [...prevListChecked, newValue];
                dispatch(productCheck(updatedList));
                return updatedList;
            });
        } else {
            setListChecked(prevListChecked => {
                const updatedList = prevListChecked.filter(item => item !== newValue);
                dispatch(productCheck(updatedList));
                return updatedList;
            });
        }
    };

    const openConfirmation = (productId) => {
        dispatch(deleteCart(productId))
    };

    const handleSearch = () => {
        console.log(keySearch.length);
        dispatch(searchCartStart())
        dispatch(searchCart(keySearch))
        setSearch(true)

    };
    const handelSearchChange = (e) => {
        setKeySerch(e.target.value)

    };

    return (
        <>
            <div className="header_1">
                <div className="header" style={{ padding: '25px 0', width: '80% !important', flexDirection: 'row', justifyContent: 'center' }}>
                    <div className="logo-container" onClick={() => window.location.href = "http://localhost:3000/product"} style={{ width: '50%' }}>
                        <div style={{ borderRight: '1px solid #ccc', paddingRight: '2%' }}>
                            <img className="logo" src="https://img.freepik.com/premium-vector/tshirt-logo-clothing-logo-apparel-store-icon-fashion-logo-design-tshirt-icon-template_657888-112.jpg" alt="Shirt Store Logo" />
                            <span className="store-name">Shirt Store</span>
                        </div>
                        <div style={{ paddingLeft: '10%', fontSize: '30px' }}>
                            <div>CART</div>
                        </div>
                    </div>

                    <div className="search-container" onClick={() => handleSearch()} >
                        <input type="text" placeholder="Search product..." className="search-input" onChange={(e) => handelSearchChange(e)} />
                        <button className="search-button">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="cart-table">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!search ? products.map(product => (
                            <tr key={product?.id}>
                                <td><input type="checkbox" value={product?.cartId} onChange={(e) => handleCheckboxChange(e)} /></td>
                                <td>
                                    <div className="product-info">
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
                        )) :
                            productSearch.map(product => (
                                <tr key={product?.id}>
                                    <td><input type="checkbox" checked={product?.checked} value={product?.cartId} onChange={(e) => handleCheckboxChange(e)} /></td>
                                    <td>
                                        <div className="product-info">
                                            <span>{product?.name}</span>
                                        </div>
                                    </td>
                                    <td>{product?.color}</td>
                                    <td>{product?.size}</td>
                                    <td>{product?.price}</td>
                                    <td>{product?.quantity}</td>
                                    <td>{product?.total}</td>
                                    <td> <button onClick={() => openConfirmation(product?.cartId)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}