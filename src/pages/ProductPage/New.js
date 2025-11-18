import React, { useState, useEffect } from 'react';
import Banner from "./Banner";
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";
import axios from 'axios';


const New = ({isLogin}) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    
    const handleCardClick = (product) => {
        setSelectedProduct(product);
        if(!isLogin){
            alert("로그인이 필요합니다!");
            return;
        }
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    }
    
    useEffect(() => {
    axios.get("/categories/3/items",{
            headers: {
                accept: "*/*"
            }
        })
        .then((response) => {
            setProducts(response.data.result);
        })
        .catch((err) => {
            console.log("CATEGORY API 요청 실패:", err);
        });
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // 페이지당 15개 상품 표시
        
    const totalPages = Math.ceil(products.length / itemsPerPage);
        
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <div>
                <Banner title="New" imagePath={"/banner_new.png"} />
                <div className="product-container">
                    <div className='product-grid'>
                        {currentProducts.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onClick={() => handleCardClick(product)}
                            />
                        ))}
                    </div>
                </div>
                {isModalOpen && (
                    <PayModal 
                        product={selectedProduct}
                        onClose={handleCloseModal} 
                    />
                )}
            </div>

            <div className="paging">
                    {currentPage > 1 && (
                        <button className="page-button" onClick={handlePrevPage}>
                            Prev
                        </button>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNumber) => (
                            <button
                                key={pageNumber}
                                className={`page-button ${currentPage === pageNumber ? 'active' : ''}`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )
                    )}

                    {currentPage < totalPages && (
                        <button className="page-button" onClick={handleNextPage}>
                            Next
                        </button>
                    )}
                </div>
            </div>
    );
};

export default New;