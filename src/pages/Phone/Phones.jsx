import { useLoaderData } from "react-router-dom";
import Phone from "../../components/Shared/Phone/Phone";


const Phones = () => {
    const phones = useLoaderData()
   
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1>All Phone Here:{phones.length}</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
           {
            phones.map(phone => <Phone key={phone.id} phone={phone}/>)
           }
           </div>
        </div>
    );
};

export default Phones;