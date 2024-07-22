import Card from "./Card";

function Tours({tours,removeTour}){
    return (
        <div className="flex flex-col justify-center items-center ">
           
            <h1 className=" mt-2 p-2 w-[220px] sm:w-[440px] font-extrabold font-serif text-[20px] sm:text-[45px] text-center  outline-dashed outline-blue-700  rounded-md">Plan With Love</h1>
            
            <div className="max-w-[1300px] flex flex-wrap justify-center items-center mx-auto  ">
            { 
                tours.map( (tour)=>{
                    return (<Card key={tour.id} {...tour} removeTour={removeTour}></Card>);
                })
            }
        
            </div>
        </div>
            
    );

}
export default Tours