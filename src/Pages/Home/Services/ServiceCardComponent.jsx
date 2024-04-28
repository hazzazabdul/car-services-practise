import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCardComponent = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="services" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <div className="flex items-center justify-between mt-4">
          <p className="text-orange-600 font-bold">Price: ${service.price}</p>
          <Link to={`/checkout/${service._id}`}>
            <button className="btn bg-transparent text-orange-600 font-bold hover:bg-transparent hover:border-orange-600">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardComponent;
