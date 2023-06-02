import { Link } from "react-router-dom";

const ShowCard = ({show}) => {
  const {id, image, name, language, rating } = show.show;
    return (
      <div className="card w-80 bg-base-100 shadow-xl" style={{height: "580px"}}>
        <figure><img src={image?.original} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-lg">Language: {language}</p>
          <p className="text-lg">Rating: {rating.average?rating.average : 0}/10</p>
          <div className="card-actions justify-end">
            <Link to={`/show/${id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ShowCard;