import { Link } from "react-router-dom";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="flex sm:flex-row flex-col gap-5 items-center ">
        <div className="md:w-1/2 space-y-6 pl-3">
          <h1 className="text-5xl font-bold">
            {" "}
            Books to freshen up your bookshelf
          </h1>
          <Link to="/rokomaribooks" className="btn btn-primary">Check Rokomari Updates</Link>
        </div>
        <img
          src={bannerImg}
          className="md:w-1/2 max-h-96 object-cover rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
