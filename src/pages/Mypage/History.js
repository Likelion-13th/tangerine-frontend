import React from "react";

const History = () => {

	const handleCancel = () => {
		alert("취소");
	}
	
  return (
    <div className="history-container-wrap">
        <div className="history-title">나의 쇼핑 내역</div>
        <div className="history-container">
            <table className="history-table" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>주문 일자</th>
                        <th>상품 정보</th>
                        <th>수량</th>
                        <th>구매 금액</th>
                        <th>상태</th>
                        <th>주문 취소</th>
                    </tr>
                </thead>
                <tbody>
		                <tr>
                        <td>2025-01-01</td>
                        <td>
                          <div className="product-info-cell">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/perfume_1.png`}
                              alt="perfume_1"
                              className="history-perfume-image"
                            />
                            <div className="product-info-section">
                                <div className="product-info-text">
                                  오션 향수 오드퍼퓸
                                </div>
                                <div className="product-info-explain">
                                  AT
                                </div>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>495,000원</td>
                        <td>배송중</td>
                        <td>
		                      <div className="history-cancel">
		                        <div
		                          className="history-cancel-button"
		                          onClick={handleCancel}
		                        >  
		                          취소
		                        </div>
		                      </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>    
    );
};
export default History;