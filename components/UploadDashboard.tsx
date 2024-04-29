'use client';

import React from 'react';

export default function UploadDashboard() {

    return (
        <div className='flex items-center justify-center'>
            <button 
				onClick={() => { document.getElementById('upload-trigger')?.click(); }}
                className='text-base font-semibold border border-indigo-500 shadow-md shadow-sky-700 p-2 rounded-md hover:text-indigo-400 mb-8'
                >
				Upload
			</button>
        </div>
    );

};
