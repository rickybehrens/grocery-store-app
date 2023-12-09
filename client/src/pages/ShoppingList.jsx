import React from 'react';
import { useState, useEffect } from 'react';

const Shoppinglist = () => {
    // State to hold the list of items
    const [items, setItems] = useState([]);

    // State to handle user input
    const [inputValue, setInputValue] = useState('');

    // Load items from localStorage on component mount
    useEffect(() => {
        const storedItems = localStorage.getItem('shoppingList');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    // Update localStorage whenever items change
    useEffect(() => {
        localStorage.setItem('shoppingList', JSON.stringify(items));
    }, [items]);

    // Function to handle item addition
    const addItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };
    // Enter submits the form now
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    };

    // Function to handle item deletion
    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter item..."
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
