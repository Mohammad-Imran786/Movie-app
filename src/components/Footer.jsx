import React from 'react'

const Footer = () => {

    return (
        <div className="py-6 flex flex-col gap-4 items-center">
            <div className="text-zinc-400 text-xs sm:text-base flex items-center">Designed & Developed with ❤️ by Imran. &copy; {new Date().getFullYear()} | All Rights Reserved.</div>
        </div>
    )
};

export default Footer;