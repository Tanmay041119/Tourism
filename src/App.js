
import { useState } from 'react';
import data from './data'
import Tours from './components/Tours';
function App() {
  const [tours,setTours]=useState(data);
  function removeTour(id)
  {
    const newTour = tours.filter(function(tour){
      return (tour.id!==id);
    })
    setTours(newTour);
  }
  function refreshHandler(){
    setTours(data);
  }
  if(tours.length===0){
    return (
      
      <div className=" flex flex-col justify-center items-center w-[100vw] h-[100vh]">
        <h1 className=" text-[25px] m-4">No Tours Left</h1>
        <button onClick={refreshHandler} className=" border-slate-600 border-[2px] p-1 w-[90px] hover:bg-slate-500 transition-all duration-200">
          Refresh
        </button>
      </div>
    );

  }
  return (
   <div className=" w-[100vw] h-[100vh] font-serif">
 <Tours tours={tours} removeTour={removeTour} ></Tours>
   </div>
  );
}

export default App;
