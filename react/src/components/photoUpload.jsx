import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewPhoto } from "../actions/photos";

function PhotoForm({ match }) {
  const [newPhoto] = useState({
    image: "",
    // albumId: match.params.id,
  });
  const dispatch = useDispatch();
  let albumId = match.params.id

  let image
  const handleChange = (e) => {
    image = e.target.files[0]
  }

  async function handleSubmit() {
    const data = new FormData();
    data.append("image", image);
    data.append('albumId', albumId)
    dispatch(addNewPhoto(data))
  }

  return (
    <div>
      <div className="form-group">
        <label>photo</label>
        <input
          type="file"
          className="form-control"
          name="image"
          albumid={newPhoto.albumId}
          value={image}
          placeholder="Enter photo"
          onChange={handleChange}
        />
        <Link
          to={"/photos"}
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default PhotoForm;
