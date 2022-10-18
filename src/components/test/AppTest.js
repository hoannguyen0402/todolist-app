import React, { useEffect, useState } from 'react';
import categoryApi from '../axios/catagoryApi';

AppTest.propTypes = {

};

function AppTest() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await categoryApi.getAll();
            setData(productList.data)
        }
        fetchProducts();
    }, []);

    console.log(data,"data")

    return (
        <div>
            {data.map(item => {
                return (
                    <h1>{item.name} - {item.products[5].originalPrice}</h1>
                
                )
            })}
        </div>
    );
}

export default AppTest;
