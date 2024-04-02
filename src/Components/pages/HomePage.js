import React from 'react'
import MyNavbar from '../inc/MyNavbar'
import MyCards from '../inc/MyCards'
import '../styles/HomePage.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function HomePage({ data }) {
    const navigate = useNavigate();

    return (
        <div className="card-container">
            <h1>WELOME TO OUR SHOP PAGE</h1>
               
                <div className='card-f2'>
                    {data?.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <MyCards
                                name={product.name}
                                image_url={product.image_url}
                                id={product.id}
                            />
                            
                        </div>
                    ))}
                     <div className="d-flex justify-content-between align-items-center">
                        <h4>do you want to add product:</h4>
                        <button
                            type="button"
                            class="btn btn-sub"
                            onClick={() => {
                                navigate("/product-management");
                            }}
                        >
                            Add product
                        </button>
                    
                </div>
                </div>
                
                <div className='Ubody'>
                    <h5 className='one'>Stay Fresh</h5>
                    <p>Email:Example@gmail.com 
                        Phone Number: 0555556666
                    </p>
                    <div className='line'></div>

                </div>
            </div>
    );
}

export default HomePage;


 
