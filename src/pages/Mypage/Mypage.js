import React, { useState, useEffect } from 'react';
import "../../styles/Mypage.css";
import Profile from "./Profile";
import Status from "./Status";
import Address from "./Address";
import History from "./History";
import axios from "axios";
import { useCookies } from "react-cookie";


const Mypage = () => {
    const [cookies] = useCookies(["accessToken"]);

    // 데이터 저장을 위해 상태값 선언
    const [profileData, setProfileData] = useState({});
    const [orderStatusData, setOrderStatusData] = useState({});
    const [historyData, setHistoryData] = useState([]);
    
    const handleSave = async (zipcode, address, addressDetail) => {
        try {
            const response = await axios.post(
                "/users/address",
                {
                    "zipcode": zipcode,
                    "address": address,
                    "addressDetail": addressDetail
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`
                    },
                }
                );

                if (response.data.isSuccess) {
                    alert("주소가 성공적으로 저장되었습니다.");
                } else {
                    alert(`주소 저장 실패: ${response.data.message}`);
                }
        } catch (error) {
            console.error("주소 저장 오류:", error);
            alert("주소 저장 중 오류가 발생했습니다.");
        }
    };
    const onCancel=async(orderId)=>{
        try{
            await axios.put(`/orders/${orderId}/cancel`,{}, {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${cookies.accessToken}`,
                },
            });
        }catch(err){
            console.error("주문취소 실패",err)
            alert("주문 취소 실패하였습니다.")
        }

    }
    useEffect(() => {
        axios
            .get("/users/profile", {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${cookies.accessToken}`,
                },
            })
            .then((response) => {
                // 데이터 넣기
                setProfileData({
                    usernickname: response.data.result.usernickname,
                    recentTotal: response.data.result.recentTotal,
                    maxMileage: response.data.result.maxMileage,
                });
                setOrderStatusData(response.data.result.orderStatusCounts);
            })
        axios
            .get("/orders", {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${cookies.accessToken}`,
                },
            })
            .then((response) => {
                const data=response.data.result.map((elem)=>{
                    return  {
                        createdAt: elem.createdAt,
                        name: elem.item.name,
                        imagePath: elem.item.imagePath,
                        brand: elem.item.brand,
                        quantity: elem.quantity,
                        finalPrice: elem.finalPrice,
                        status: elem.status,
                        orderId: elem.orderId
                    }
                })
                setHistoryData(data)  
            })
    }, [cookies.accessToken]);

    return (
        <div className="page-container">
            <Profile profileData={profileData} />
            <Status orderStatusData={orderStatusData} />
            <Address handleSave={handleSave}/>
            <History historyData={historyData} onCancel={onCancel}/>
        </div>
    );
};

export default Mypage;