import React from 'react';

export default function Modal({ open, onClose, children }) {
    return(
        // backdrop
        <div>
            <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? ' visible bg-black/20' : 'hidden'}`}></div>
            <div className={` sm:mt-5 mt-10 rounded-lg fixed sm:w-1/3 w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-4 ${open ? '' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}