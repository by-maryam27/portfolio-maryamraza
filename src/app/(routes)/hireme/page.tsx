import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Hireme() {
    return (
        <main className="flex justify-center mt-28 mb-52">
            <div className="p-6 sm:p-10 lg:p-12 bg-black border border-gray-300 rounded-3xl transition-shadow duration-300 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)] max-w-lg sm:max-w-2xl lg:max-w-4xl">
                
                {/* Heading */}
                <div className="text-center text-white mb-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-purple-500 to-purple-50">
                        Contact Me Personally
                    </h1>
                </div>

                {/* Contact Info */}
                <div className="text-center mb-4">
                    <p className=" text-white mb-2 text-lg">
                        You can reach me at <a href="mailto:maryamraza0016@gmail.com" className="text-blue-400">maryamraza0016@gmail.com</a> or call us at <br /> <a href="tel:+923121289651" className="text-blue-400">+923121289651</a>.
                    </p>
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-purple-500 to-purple-50">
                        Connect with us on social media
                    </h2>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 text-lg sm:text-xl text-white">
                    <a href="https://www.linkedin.com/in/maryam-raza-990481301" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2]">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/by-maryam27" target="_blank" rel="noopener noreferrer" className="hover:text-[#F0F0F0]">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C]">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/+923121289651" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </main>
    );
}
