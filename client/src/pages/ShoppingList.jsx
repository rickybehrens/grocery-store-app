import React, { useState, useEffect } from 'react';
import TriggeredListIcon from '../components/TriggeredListIcon';
import triggerWords from '../components/triggerWords.json';
import TextArea from '../components/TextArea.jsx';

const ShoppingList = () => {
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
      setItems([...items, { name: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Function to handle item deletion
  // Function to handle item deletion
  const deleteItem = (index) => {
    console.log(`Deleting item at index ${index}`);
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Function to handle toggling completion status
  const toggleCompletion = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addItem();
            }
          }}
          placeholder="Enter item..."
        />
        <button
          onClick={addItem}
          className="bg-amber-500 rounded hover:bg-red-600 transition duration-300 transform hover:scale-110 p-2"
        >
          Add Item
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`${item.completed ? 'line-through hover:text-gray-500' : 'hover:text-gray-500'
                }`}
              title="Click to mark as completed"
              onClick={() => toggleCompletion(index)}
            >
              {item.name}
            </span>
            <button
              className="ml-2 bg-red-600 text-white font-bold rounded w-6 h-6 p-1 flex items-center justify-center"
              onClick={() => deleteItem(index)}
              title="Remove item"
            >
              X
            </button>
            <TriggeredListIcon item={item.name} triggerWords={triggerWords} />
          </li>
        ))}
      </ul>
      <div>
        <TextArea />
      </div>
    </div>
  );
};

export default ShoppingList;
