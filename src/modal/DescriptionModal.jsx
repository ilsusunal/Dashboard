import React from 'react';

export function DescriptionModal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-indigo-100 p-6 rounded-lg max-w-sm w-full mx-4">
                <div className='flex justify-between items-center mb-4'>
                    <h3 className="text-lg font-semibold">Description</h3> 
                    <button 
                        className="px-4 py-2 bg-yellow-400 text-white rounded-full"
                        onClick={onClose}
                    >
                        <i className="fa-solid fa-xmark"/>
                    </button>
                </div>
                <p>{content}</p>
            </div>
        </div>
    </>
    );
}
