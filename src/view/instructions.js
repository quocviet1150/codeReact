import React from 'react';

const Instructions = ({ isPopupVisible, togglePopup }) => {
    return (
        <>
            <div className="popup-container">
                <div style={{ display: 'flex' }} >
                    <h4 className="modal-title">HƯỚNG DẪN CHỌN SIZE </h4>
                    <span style={{ position: 'absolute', top: '5px', right: '10px', cursor: 'pointer' }} onClick={togglePopup}>
                        X
                    </span>
                </div>
                <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '0%' }}></div>


                <span style={{ fontSize: '14px' }}>Nếu bạn băn khoăn không biết chọn size nào cho phù hợp với cân nặng và chiều cao của mình, đừng lo lắng! Hãy xem bảng hướng dẫn chọn size bên dưới mà&nbsp;<span style={{ color: 'rgb(255, 0, 0)' }}>T-SHIRT</span>&nbsp;tư vấn riêng dành cho bạn</span>

                <div style={{ paddingTop: '3%', paddingBottom: '4%' }}>
                    <img className="image-instruction" src={require("../image/home/introtion1.png")} alt="Shirt Store Logo" />
                    <img className="image-instruction" src={require("../image/home/introtion2.png")} alt="Shirt Store Logo" />
                </div>
                <img className="image-instruction" src={require("../image/home/introtion3.jpg")} alt="Shirt Store Logo" />
                <div style={{ width: '90%', marginLeft: '5%' ,paddingBottom:'3%'}}>
                    <span style={{ fontSize: '14px' }}>Bảng hướng dẫn chọn size trên là bảng hướng dẫn dựa trên kinh nghiệm nhiều năm của T-SHIRT theo khảo sát nhu cầu sở thích của khách hàng, tất nhiên sẽ không tuyệt đối, sẽ có những trường hợp ngoại lệ phụ thuộc theo vóc dáng, sở thích của từng người. Ví dụ có người thích mặc ôm, có người thích mặc rộng...</span>
                    <span style={{ fontSize: '14px' }}><br></br> <br></br>Nếu bạn vẫn còn có những mắc thắc và băn khoăn cần được giải đáp? Hãy liên hệ ngay với Bộ phận Chăm sóc khách hàng của T-SHIRT qua&nbsp;Hotline <strong>(08)68 444 644</strong>&nbsp;để được hỗ trợ thêm.</span>

                </div>

                <button onClick={togglePopup} className='btn-instruction'>Đóng</button>
            </div>
        </>
    );
};

export default Instructions;
