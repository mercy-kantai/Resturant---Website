import React, { useState } from "react";
const Navbar = () => {
    return (
        <main>
            <div className="flex gap-80">
                <div className="flex gap-40 ml-20 my-8 text-[20px] font-sans">
                <h2 className="font-sans">food house</h2>
                    <a className="text-[#FFC624] font-sans">HOME</a>
                    <a>RESTAURANT</a>
                    <a>SERVICES</a>
                    <a>CART</a>
                </div>
                <button className="font-sans my-8 text-[20px]">Sign In</button>
            </div>
        </main>
    )
}
export default Navbar;