import React from 'react';

const Sustainability = () => {
    return (
        <main>
            <nav className="mb-8">
                {/* Navigation links to jump to Seafood and Meats sections */}
                <a href="#seafood" className="mr-4 text-blue-500 hover:underline">Seafood</a>
                <a href="#meats" className="text-blue-500 hover:underline">Meats</a>
            </nav>
            <div>
                <p>Sustainability can be achieved by every person! Here are some ways we can all do our part while shopping to help keep our world healthy.</p>
                <div>
                    <h4>Maryville University's article on sustainable shopping:</h4>
                    <div>
                        <p>The university of Maryville published <a href="https://online.maryville.edu/blog/what-is-sustainable-shopping/" target="_blank" rel="noopener noreferrer">THIS</a> article on the matter.</p>
                    </div>
                    <h4>perchenergy.com's article on sustainable shopping, and eating green:</h4>
                    <div>
                        <p>perchenergy.com published <a href="https://www.perchenergy.com/blog/lifestyle/sustainable-grocery-shopping-eating-sustainably" target="_blank" rel="noopener noreferrer">THIS</a> article on the matter.</p>
                    </div>
                </div>
            </div>
            <div id="seafood">
                <h4 className="mt-8">Seafood:</h4>
            </div>
            <div className="w-3/5">
                <a href="/SeafoodGuide.png" target="_blank" rel="noopener noreferrer">
                    <img src="/SeafoodGuide.png" alt="" className="w-full h-auto" />
                </a>
                <div>
                    <p className='mt-8'>Things to look for:</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-center">
                        <img src="/Tuna1.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/Tuna2.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/Tuna3.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/Tuna4.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/Tuna5.webp" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>
            <div id="meats">
                <h4 className="mt-8">Meats:</h4>
            </div>
            <div className="w-3/5">
                <a href="/Meats.png" target="_blank" rel="noopener noreferrer">
                    <img src="/Meats.png" alt="" className="w-full h-auto" />
                </a>
            </div>
        </main>
    );
};

export default Sustainability;
