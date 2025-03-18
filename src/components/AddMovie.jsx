import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css";

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="add-movie-container">
      <h2>Add New Movie</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>

        <label>
          Director:
          <input type="text" name="director" required />
        </label>

        <label>
          Genre:
          <select name="genre">
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </label>

        <label>
          Release Year:
          <input type="number" name="releaseYear" required />
        </label>

        <label>
          Synopsis:
          <textarea name="synopsis" required></textarea>
        </label>

        <label>
          Poster Image URL:
          <input type="url" name="posterUrl" />
        </label>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;