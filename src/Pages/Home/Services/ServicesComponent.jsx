import { useEffect, useState } from "react";
import ServiceCardComponent from "./ServiceCardComponent";

const ServicesComponent = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-10 space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl ">Our Service Area</h2>
        <p className="w-1/2 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          aliquid molestiae pariatur, totam minus laborum!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCardComponent key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
