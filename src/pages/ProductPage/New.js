import React, { useState } from 'react';
import Banner from "./Banner";
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const New = () => {
    const products = [
        {
            id: 1,
            name: "오션 향수 오드퍼퓸",
            brand: "AT",
            price: 49500,
            imagePath: "/img/perfume_1.png",
            isNew: true,
        },
        {
            id: 2,
            name: "미스티블루 디퓨저",
            brand: "COCODOR",
            price: 33000,
            imagePath: "/img/diffuser_2.png",
            isNew: true,
        },
        {
            id: 3,
            name: "클린세탁소 향수 오드퍼퓸",
            brand: "AT",
            price: 49500,
            imagePath: "/img/perfume_3.png",
            isNew: true,
        },
        {
            id: 4,
            name: "멀티 클래식 디퓨저",
            brand: "COCODOR",
            price: 37800,
            imagePath: "/img/diffuser_4.png",
            isNew: true,
        },
        {
            id: 5,
            name: "어퍼플로즈 향수 오드퍼퓸",
            brand: "STUDIO ODOR",
            price: 43900,
            imagePath: "/img/perfume_5.png",
            isNew: true,
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    
    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15; // 페이지당 15개 상품 표시
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    return (
        <div>
            <Banner title="New" imagePath={"/banner_new.png"} />
            <div className="product-container">
                <div className='product-grid'>
                    {products.map((product) => (
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
    );
};

export default New;