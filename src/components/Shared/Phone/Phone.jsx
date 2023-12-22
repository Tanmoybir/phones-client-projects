import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
    const { id, image, name, price } = phone

    return (
        <div>
            {/*  */}

            <Link to={`/phone/${id}`}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">{price}</div>
                        </h2>

                    </div>
                </div>
            </Link>

            {/*  */}
        </div>
    );
};

export default Phone;