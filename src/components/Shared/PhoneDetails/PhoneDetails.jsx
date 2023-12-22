import { useLoaderData } from "react-router-dom";


const PhoneDetails = () => {
    const details = useLoaderData()
    console.log(details);
    const {image,name,description,price} = details
    return (
        <div className="mt-20">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;