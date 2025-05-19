import React, { useState } from 'react';
import Banner from "./Banner";
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";

const Perfume = () => {
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
            name: "라일락 플루이 오 드 퍼퓸",
            brand: "RIUNS",
            price: 68000,
            imagePath: "/img/perfume_2.png",
            isNew: false,
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
            name: "클로즈 릴리 로 향수 오드퍼퓸",
            brand: "SCENTSTELLER",
            price: 46400,
            imagePath: "/img/perfume_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "어퍼플로즈 향수 오드퍼퓸",
            brand: "STUDIO ODOR",
            price: 43900,
            imagePath: "/img/perfume_5.png",
            isNew: true,
        },
        {
            id: 6,
            name: "Floris Cherry Blossom Eau de Parfum Donna",
            brand: "PAPIQUE",
            price: 685000,
            imagePath: "/img/perfume_6.png",
            isNew: false,
        },
        {
            id: 7,
            name: "프리지아 오 드 코롱 퍼퓸 향수 50ml",
            brand: "산타마리아노벨라",
            price: 236000,
            imagePath: "/img/perfume_7.png",
            isNew: false,
        },
        {
            id: 8,
            name: "블랙베리 앤 베이 코롱 EDC 100ml",
            brand: "조말론",
            price: 236000,
            imagePath: "/img/perfume_8.png",
            isNew: false,
        },
        {
            id: 9,
            name: "플로리스 소울 암바르 오드뚜왈렛 100 ml",
            brand: "PAPIQUE",
            price: 430000,
            imagePath: "/img/perfume_9.png",
            isNew: false,
        },
        {
            id: 10,
            name: "미스 디올 블루밍 부케 50ml",
            brand: "DIOR",
            price: 166000,
            imagePath: "/img/perfume_10.png",
            isNew: false,
        },
        {
            id: 11,
            name: "플로리스 체리 블로썸 오 드 퍼퓸 EDP 100ml",
            brand: "CHELSEA",
            price: 300000,
            imagePath: "/img/perfume_11.png",
            isNew: false,
        },
        {
            id: 12,
            name: "이칸 드 퓌메 오 드 퍼퓸",
            brand: "세르주 루텐",
            price: 205000,
            imagePath: "/img/perfume_12.png",
            isNew: false,
        },
        {
            id: 13,
            name: "Magnolia Bliss 100ml 오 드 퍼퓸",
            brand: "Juliette Has A Gun",
            price: 97850,
            imagePath: "/img/perfume_13.png",
            isNew: false,
        },
        {
            id: 14,
            name: "플로리스 소울 암바르 오드뚜왈렛 100 ml",
            brand: "PAPIQUE",
            price: 430000,
            imagePath: "/img/perfume_14.png",
            isNew: false,
        },
        {
            id: 15,
            name: "페어 잉크. EDP 100ml",
            brand: "Juliette Has A Gun",
            price: 239000,
            imagePath: "/img/perfume_15.png",
            isNew: false,
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    
    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

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
                <Banner title="Perfume" imagePath={"/banner_perfume.jpg"} />
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

export default Perfume;