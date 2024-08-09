import { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetconversations from '../../hookes/useGetconversations';




const SearchInput = () => {
    const [search, setSearch]=useState("");
    const {setSelectedConversation } = useConversation();
    const { conversations } = useGetconversations();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit = {handleSubmit} className='flex items-center gap-2'>
            <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}  // update search state when input changes.
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outlinee-none' />
            </button>
        </form>
    );
};

export default SearchInput;




//Starter code for snippet;
//import { IoSearchSharp } from "react-icons/io5";



// const SearchInput = () => {
//     return (
//         <form className='flex items-center gap-2'>
//             <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//             <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//             <IoSearchSharp className='w-6 h-6 outlinee-none' />
//             </button>
//         </form>
//     )
// }

// export default SearchInput;