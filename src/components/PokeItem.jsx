import React, { useEffect, useState } from 'react';
import "../index.css";

function PokeItem({ search }) {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const API = "https://pokeapi.co/api/v2/pokemon/?limit=500";

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            const detailedPokemonData = data.results.map(async (ele) => {
                const res = await fetch(ele.url);
                return await res.json();
            });
            const finalData = await Promise.all(detailedPokemonData);
            setPokemon(finalData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    if (error) return <h1 className="col-span-full text-red-500">Error loading data...</h1>;
    // if (loading) return <h1 className="col-span-full text-2xl font-bold animate-pulse">Loading Pokédex...</h1>;
    if (loading) return (
        <div className="col-span-full flex flex-col items-center justify-center py-20">
            {/* The Animated Pokéball */}
            <div className="relative w-16 h-16 border-4 border-blue-950 rounded-full bg-white overflow-hidden animate-bounce shadow-lg">
                {/* Top Half */}
                <div className="absolute top-0 w-full h-1/2 bg-red-500 border-b-4 border-blue-950"></div>
                {/* Center Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-blue-950 rounded-full z-10"></div>
            </div>

            {/* Staggered Text & Sub-loader */}
            <div className="mt-6 flex flex-col items-center">
                <h2 className="text-xl font-black text-blue-950 tracking-tighter uppercase">
                    Syncing Pokédex...
                </h2>
                <div className="w-48 h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden border border-slate-300">
                    <div className="h-full bg-blue-950 w-full origin-left animate-[loading_1.5s_infinite_ease-in-out]"></div>
                </div>
                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-[0.2em]">
                    It Might Take A While May Be more than Minute 
                </p>
            </div>
        </div>
        
    );

    const filteredData = pokemon.filter((ele) =>
        ele.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            {filteredData.map((ele) => (
                <div key={ele.id} className='group relative flex flex-col w-full max-w-75 bg-blue-950 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-b-8 border-blue-800'>

                    {/* Top Section: The Blob & Image */}
                    <div className='relative flex justify-center items-center bg-sky-50 p-6 overflow-hidden'>
                        <div className='blob bg-linear-to-br from-sky-200 to-blue-300 w-48 h-48 absolute transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110'></div>
                        <img
                            className='relative z-10 w-32 h-32 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-125'
                            src={ele.sprites.other.dream_world.front_default || ele.sprites.front_default}
                            alt={ele.name}
                        />
                    </div>

                    {/* Content Section */}
                    <div className='p-5 flex flex-col gap-3'>
                        <h2 className='text-center text-2xl text-white font-black uppercase tracking-tight'>
                            {ele.name}
                        </h2>

                        <div className='flex justify-center flex-wrap gap-2'>
                            {ele.types.map((t) => (
                                <span key={t.type.name} className='bg-green-400 text-green-950 text-[10px] font-black px-3 py-1 rounded-full uppercase'>
                                    {t.type.name} 
                                </span>
                            ))}
                        </div>

                        {/* Staggered Stats Grid */}
                        <div className='grid grid-cols-2 gap-2 mt-2 border-t border-blue-900 pt-4'>
                            <Stat label="Height" value={ele.height} />
                            <Stat label="Weight" value={ele.weight} />
                            <Stat label="Speed" value={ele.stats[5].base_stat} />
                            <Stat label="Attack" value={ele.stats[1].base_stat} />
                        </div>

                        <div className='text-center mt-2'>
                            <p className='text-blue-300 text-[11px] font-bold uppercase tracking-widest'>Abilities</p>
                            <p className='text-white text-xs opacity-90'>
                                {ele.abilities.map(a => a.ability.name).join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

// Reusable Stat Component for Staggered Hierarchy
const Stat = ({ label, value }) => (
    <div className='flex flex-col items-center bg-blue-900/50 p-2 rounded-lg'>
        <span className='text-blue-300 text-[10px] uppercase font-bold'>{label}</span>
        <span className='text-white font-bold'>{value}</span>
    </div>
);

export default PokeItem;