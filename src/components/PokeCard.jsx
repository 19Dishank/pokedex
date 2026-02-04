import React, { useState } from 'react';
import PokeItem from './PokeItem';

function PokeCard() {
    const [search, setSearch] = useState("");

    return (
        <div className='min-h-screen bg-slate-100 pb-20'>
            {/* Header Section */}
            <div className='flex flex-col items-center bg-white py-10 shadow-sm mb-8'>
                <h1 className='text-6xl font-black text-blue-950 tracking-tighter mb-6'>
                    POKÉDEX
                </h1>
                <div className='relative w-full max-w-md px-4'>
                    <input 
                        type="text" 
                        placeholder='Search Pokemon...' 
                        className='w-full border-2 border-slate-200 bg-white focus:border-blue-500 outline-none rounded-full px-6 py-3 font-medium transition-all shadow-inner' 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid Container */}
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
                    <PokeItem search={search} />
                </div>
            </div>
        </div>
    );
}

export default PokeCard;