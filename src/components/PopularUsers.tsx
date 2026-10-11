
import  PopularUsersCard from './PopularUsersCard'
import { FiArrowRight } from "react-icons/fi";

function PopularUsers() {

  return (
    <div className='bg-gray-200 text-white p-4 sm:p-6 md:p-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold mb-4 text-black'>Popular Users</h2>
   <button className="text-gray-500 font-bold py-2 px-4 rounded flex items-center gap-2 hover:bg-blue-700">
  View All
  <FiArrowRight size={18} />
</button>
      </div>
      
     <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <PopularUsersCard />
</div>
    </div>
    
  )
}

export default PopularUsers