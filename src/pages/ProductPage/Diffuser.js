import React, { useState } from 'react';
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from '../../components/PayModal';

const Diffuser = () => {
    const products = [
        {
            id: 1,
            name: "벚꽃 디퓨저",
            brand: "COCODOR",
            price: 34800,
            imagePath: "/img/diffuser_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "미스티블루 디퓨저",
            brand: "COCODOR",
            price: 33000,
            imagePath: "/img/diffuser_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "모먼트 디퓨저",
            brand: "COCODOR",
            price: 18800,
            imagePath: "/img/diffuser_3.png",
            isNew: false,
        },
        {
            id: 4,
            name: "멀티 클래식 디퓨저",
            brand: "COCODOR",
            price: 37800,
            imagePath: "/img/diffuser_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "포레스트 디퓨저",
            brand: "COCODOR",
            price: 26800,
            imagePath: "/img/diffuser_5.png",
            isNew: false,
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
            <Banner title="Diffuser" imagePath={"/banner_diffuser.jpg"} />
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


export default Diffuser;