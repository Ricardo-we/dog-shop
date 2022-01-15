import AdminSideBar from "../admin-sidebar/admin-sidebar";
import { useEffect, useState } from 'react';
import { APIURL } from '../../../App';
import FormGroup from "../FormGroup";
import getBase64 from "../../../utils/getBase64";
import sendData from "../admin-utils/sendData";

function ProductsAdmin() {
    const PRODUCTSAPIURL = `${APIURL}/products.php`;
    // CHECK USERNAME IN SESSION
    let sessionUsername = sessionStorage.getItem("username");
    if(!sessionUsername) window.location.href = "/admin" 

    // FORM VARS
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [imageValue, setImageValue] = useState();

    const [updating, setUpdating] = useState(false);
    const [updateId, setUpdateId] = useState(0);
    // GET THE TABLE DATA
    const [tableData, setTableData] = useState([{id:0}]);

    const getAllProducts = async () => {
        const response = await fetch(PRODUCTSAPIURL);
        const jsonResponse = await response.json();
        setTableData(jsonResponse);
    }

    const clearFields = () => {
        setProductValue('');
        setPriceValue('');
        setDescriptionValue('');
        setUpdateId('');
        setImageValue('');
    }

    const updateItem = async (id, originalName, originalPrice, originalDescription, originalImage) => {
        setProductValue(originalName);
        setPriceValue(originalPrice);
        setDescriptionValue(originalDescription);
        setUpdateId(id);
        setImageValue(originalImage);
        setUpdating(true);
    }
    
    const sendUpdate = async () => {
        const data = JSON.stringify({
            id: updateId,
            name: productValue,
            price: priceValue,
            description: descriptionValue,
            image: imageValue
        });
        const response = await sendData(PRODUCTSAPIURL, 'PUT', data)

        clearFields();
        getAllProducts()
        setUpdating(false);
    }

    const sendPost = async () => {
        const data = JSON.stringify({
            name: productValue,
            price: priceValue,
            description: descriptionValue,
            image: imageValue
        });
        const response = await sendData(PRODUCTSAPIURL, 'POST', data);
        
        clearFields();
        getAllProducts();
    }

    const deleteItem = async (id) => {
        const response = await fetch(PRODUCTSAPIURL, {
            method:'DELETE',
            body: JSON.stringify({id: id}) 
        })
        const finalResponse = await response.json()
        getAllProducts()
    }

    useEffect(() => {
        getAllProducts();
    },[]) 

    return ( 
        <div className="d-flex flex-row">
            <AdminSideBar />
            <div className="container">
                <form className="form">
                    <FormGroup 
                        label="product name" 
                        value={productValue} 
                        onChangeFunc={val => setProductValue(val)}
                    />
                    <FormGroup 
                        label="price" 
                        type="number"
                        value={priceValue} 
                        onChangeFunc={val => setPriceValue(val)}
                    />
                    <FormGroup 
                        label="description"
                        type="text" 
                        value={descriptionValue} 
                        onChangeFunc={val => setDescriptionValue(val)}
                    />
                    <div className="form-group">
                        <label>image</label>
                        <input 
                            type="file"
                            placeholder="image" 
                            // value={imageValue} 
                            onChange={(e) => getBase64(e.target.files[0], (res) => setImageValue(res))} 
                            className="form-control"
                        />
                    </div>
                    <button 
                        type="button"
                        className={updating?"d-none": "btn btn-primary"} 
                        style={{width: '100%'}}
                        onClick={sendPost}
                    >
                        ADD
                    </button>
                    <button 
                        type="button" 
                        className={updating?"btn btn-success":"d-none"} 
                        style={{width: '100%'}}
                        onClick={sendUpdate}    
                    >
                            UPDATE
                    </button>
                </form>
                <div className="container" style={styles.table}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">price</th>
                                <th scope="col">description</th>
                                <th scope="col">image</th>
                                <th scope="col">options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tableData.map(productsData => (
                            <tr key={productsData.id}>
                                <td>
                                    {productsData.name}
                                </td>
                                <td>
                                    {productsData.price}
                                </td>
                                <td>
                                    {productsData.description}
                                </td>
                                <td>
                                    <img src={productsData.image} alt={productsData.name} style={{width: '100px', height: '100px'}}/>
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-success" 
                                        onClick={() => updateItem(productsData.id, productsData.name, productsData.price, productsData.description, productsData.image)}
                                    >
                                        update
                                    </button>
                                    <button 
                                        className="btn btn-danger" 
                                        onClick={() => deleteItem(productsData.id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>     
    );
}
const styles = {
    table: {
        height: "450px",
        overflowY: "scroll"
    }
}

export default ProductsAdmin;