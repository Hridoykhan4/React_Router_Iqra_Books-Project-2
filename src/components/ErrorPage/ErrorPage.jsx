import { Link } from "react-router-dom";
import errorImg from "../../assets/errorImage.jpg";

const ErrorPage = () => {
  return (
    <div className="flex items-center flex-col gap-4 h-screen justify-center">
      <h3 className="text-2xl md:text-3xl lg:text-5xl">Page Not Found!!!</h3>
      <figure className="w-44 md:w-60 lg:w-72">
        <img className="w-full h-full object-cover" src={errorImg} alt="" />
      </figure>
      <Link to="/">
        <button className="btn text-white btn-success">Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
