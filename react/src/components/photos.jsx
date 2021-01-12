import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPhotos, fetchPhotosById } from "../actions/photos";
import { useDispatch, useSelector } from "react-redux";

const Photos = ({ match }) => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.slice(-100));

  useEffect(() => {
    dispatch(
      match.params.id ? fetchPhotosById(match.params.id) : fetchPhotos()
    );
  }, [match, dispatch]);

  return (
    <div className="row">
      <div className="col-3">
        {match.params.id ? (
          <Link
            to={`/photos/newPhoto/${match.params.id}`}
            className="btn btn-primary btn-sm"
          >
            Add New Photo
          </Link>
        ) : (
          ""
        )}
      </div>
      {photos.map((photo) => (
        <div key={photo._id} className="col-6 col-md-3">

          <img className="card-img-top" src={photo.image} alt="pics here" />
        </div>
      ))}
    </div>
  );
};

export default Photos;
