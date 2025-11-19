
// import React from 'react'
// import Link from 'next/link'
// // import Image from 'next/image'

// const WhatsAppWidget = () => {
//     return (
//         // <div className="whatsapp-box">
//         //     <Link
//         //         href="https://api.whatsapp.com/send?phone=41774144691"
//         //         title="Whatsapp"
//         //         target="_blank"
//         //         rel="noopener noreferrer"
//         //         className="whatsapp"
//         //     >
//         //         <Image src="/images/images/whatsapp.png" alt="Whatsapp" title="Whatsapp" width={60} height={60} />
//         //     </Link>

//         // </div>

//         // <div className="whatsappchat-box">
//         //     <Link
//         //         href="https://api.whatsapp.com/send?phone=41774144691"
//         //         title="Whatsapp"
//         //         target="_blank"
//         //         rel="noopener noreferrer"
//         //         className="whatsapp"
//         //     >
//         //         {/* <Image src="/images/images/whatsapp.png" alt="Whatsapp" title="Whatsapp" width={30} height={30} /> */}
//         //         <i className="bx bxl-whatsapp whatsapp-chat-icon"></i>
//         //         {/* +41 77 414 46 91 */} <span>Chat with Us</span>
//         //     </Link>

//         // </div>

//         <div className="whatsappchat-box">
//             <Link
//                 href="https://api.whatsapp.com/send?phone=41774144691"
//                 title="Whatsapp"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="whatsapp"
//                 aria-label="Chat via WhatsApp"
//             >
//                 <i className="bx bxl-whatsapp whatsapp-chat-icon"></i>
//                 <span className="whatsapp-text">Chat via WhatsApp</span>
//             </Link>
//         </div>

//     )
// }

// export default WhatsAppWidget


"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const WhatsAppWidget = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <div className={`whatsappchat-box ${isScrolled ? 'scroll-active' : ''}`}>
                <Link
                    href="https://api.whatsapp.com/send?phone=41774144691"
                    title="Chat via WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp"
                    aria-label="Chat via WhatsApp"
                >
                    <i className="bx bxl-whatsapp whatsapp-chat-icon"></i>
                    <span className="whatsapp-text">Chat via WhatsApp</span>
                </Link>
            </div>
        </div>
    );
};

export default WhatsAppWidget;
