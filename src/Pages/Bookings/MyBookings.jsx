import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import Booking from "./Booking";

import axios from "axios";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
      })
      .catch((e) => console.log(e.message));
  }, [url]);

  const handleDelete = (id) => {
    const question = confirm("Are you sure?");
    if (question) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="py-10">
      <h2 className="text-center font-bold text-2xl">
        My Bookings: {bookings.length}
      </h2>

      <div className="overflow-x-auto py-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <Booking
                key={booking._id}
                handleConfirm={handleConfirm}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
