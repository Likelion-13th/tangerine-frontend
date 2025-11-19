import React from "react";

const statusKorean = {
  COMPLETE: "배송 완료",
  CANCEL: "취소됨",
  PROCESSING: "배송중"
};

const History = ({ historyData,onCancel }) => {
	
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
                  {historyData.map((history)=>{return(
                    <tr>
                        <td>{history.createdAt.replace("T", " ").slice(0, 16)}</td>
                        <td>
                          <div className="product-info-cell">
                            <img
                              src={history.imagePath}
                              alt={history.name}
                              className="history-perfume-image"
                            />
                            <div className="product-info-section">
                                <div className="product-info-text">
                                  {history?.name ?? ""}
                                </div>
                                <div className="product-info-explain">
                                  {history?.brand ?? ""}
                                </div>
                            </div>
                          </div>
                        </td>
                        <td>{history?.quantity??"NaN"}</td>
                        <td>{history?.finalPrice ?? ""}원</td>
                        <td>{statusKorean[history.status] ?? history.status}</td>
                        {/* 영어 말고 한국어로 뜨게 하고싶음
                            -> 완료함*/}
                        <td>
		                      <div className="history-cancel">
		                        <div
		                          className="history-cancel-button"
		                          onClick={() => onCancel(history?.orderId)}
		                        >  
		                          취소
		                        </div>
		                      </div>
                        </td>
                    </tr>)})}
		                
                </tbody>
            </table>
        </div>
    </div>    
    );
};
export default History;