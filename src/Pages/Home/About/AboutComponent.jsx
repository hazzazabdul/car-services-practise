import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const AboutComponent = () => {
  return (
    <div className="hero min-h-screen mt-30">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute top-1/2 border-8 border-white right-5 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2 space-y-5 p-4">
          <h3 className="text-orange-500 text-3xl font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified and experience in this field
          </h1>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-orange-500 text-white hover:bg-orange-600">
            GET MORE INFO
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
