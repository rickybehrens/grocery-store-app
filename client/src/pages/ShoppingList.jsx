import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';

const Shoppinglist = () => {
    const [formState, setFormState] = useState({
        itemname: ''
    })
    const [items, setItems] = useState([]);

    const [addItem, { error, data }] = useMutation(ADD_ITEM);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addItem({
                variables: { ...formState },
            });

            console.log('(DELETE BEFORE PRODUCTION)Mutation Response:', data)
            // Updates the list of items
            setItems([...items, data.addItem.item]);

            // Clears the users input
            setFormState({
                itemname: ''
            });

        } catch (e) {
            console.error('GraphQL error:', e);
        }
    };

    const handleItemClick = (itemId) => {
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
    };


    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Shopping List</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className="form-input"
                                    placeholder="Item Name"
                                    name="itemname"
                                    type="text"
                                    value={formState.itemname}
                                    onChange={handleChange}
                                />
                                <button
                                    className="btn btn-block btn-primary"
                                    style={{ cursor: 'pointer' }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        )}

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} onClick={() => handleItemClick(item.id)}>
                                {item.itemname}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Shoppinglist;
