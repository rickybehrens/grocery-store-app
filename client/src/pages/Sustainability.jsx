import React from 'react';

const Sustainability = () => {
    return (
        <main>
            <nav className="mt-8 mb-5 font-bold" style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                {/* Navigation links to jump to Seafood and Meats sections */}
                <a href="#seafood" className="mr-4 text-blue-500 hover:underline">Seafood</a>
                <a href="#meats" className="text-blue-500 hover:underline">Meats</a>
            </nav>
            <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Sustainability can be achieved by every person! Here are some ways we can all do our part while shopping to help keep our world healthy.</h2>
                <div>
                    <h4>Maryville University's <a href="https://online.maryville.edu/blog/what-is-sustainable-shopping/" target="_blank" rel="noopener noreferrer"><span className="text-blue-500 font-bold">ARTICLE</span></a> on sustainable shopping</h4>
                    <h4>perchenergy.com's <a href="https://www.perchenergy.com/blog/lifestyle/sustainable-grocery-shopping-eating-sustainably" target="_blank" rel="noopener noreferrer"><span className="text-blue-500 font-bold">ARTICLE</span></a> on sustainable shopping, and eating green</h4>
                </div>
            </div>
            <div id="seafood">
                <h4 className="mt-8 text-blue-500 font-bold">Seafood:</h4>
            </div>
            <div className="w-3/5">
                <a href="../public/SeafoodGuide.png" target="_blank" rel="noopener noreferrer">
                    <img src="/SeafoodGuide.png" alt="" className="w-full h-auto" />
                </a>
                <div>
                    <p className="mt-8">Things to look for:</p>
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
                <h4 className="mt-8 text-blue-500 font-bold">Meats:</h4>
            </div>
            <div className="w-3/5">
                <a href="../public/Meats.png" target="_blank" rel="noopener noreferrer">
                    <img src="/Meats.png" alt="" className="w-full h-auto" />
                </a>
            </div>
        </main>
    );
};

export default Sustainability;
