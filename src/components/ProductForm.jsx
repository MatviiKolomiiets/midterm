import React, {useState} from 'react';
import './ProductForm.css';

function ProductForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedAlertMessage = `
            Form Data Submitted:
            - Name: ${formData.name}
            - Description: ${formData.description}
            - Category: ${formData.category}
            - Quantity: ${formData.quantity}
            - Price: $${formData.price}
          `;

        alert(formattedAlertMessage);
    };

    return (
        <div className="product-form">
            <h2>New Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    step="0.01"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                />
                <div>
                    <button type="submit">SUBMIT</button>
                    <button type="button" onClick={() => setFormData({
                        name: "",
                        description: "",
                        category: "",
                        quantity: "",
                        price: ""
                    })}>
                        CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;
