import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../AuthProvider/AuthProvider";

const CheckoutPage = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const bookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      img: service.img,
      service: service.title,
      service_id: service._id,
      date,
      price: service.price,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("order received");
        }
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <>
      <h2 className="text-center font-bold">Book Service: {service.title}</h2>
      <div>
        <form onSubmit={bookService}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className=" form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                readOnly
                className="input input-bordered"
                required
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                defaultValue={"$ " + service.price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Checkout"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutPage;
