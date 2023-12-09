import React from 'react';
import { useState } from 'react';

const Shoppinglist = () => {
    const [items, setItems] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div>
            <h1>Shopping List</h1><br></br>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter Item Name"
                />
                <button onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => deleteItem(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Shoppinglist;
