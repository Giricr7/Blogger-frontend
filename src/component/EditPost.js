import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Swal from "sweetalert";
import URL from "../url";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const { id } = useParams();

  const submitTheData = (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      paragraph: paragraph,
      email: sessionStorage.getItem("id"),
      author: sessionStorage.getItem("username"),
    };
    setTitle("");
    setParagraph("");
    axios.put(`${URL}/posts/update/` + id, newArticle)
      .then((res) => {
        console.log(res.data);
        Swal("Success!", "You post is saved!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(`${URL}/posts/` + id)
      .then((res) => {
        setTitle(res.data.title);
        setParagraph(res.data.paragraph);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, {});
  return (
    <div className="container p-3 card mt-4">
      <div>
        <h2>Edit Article</h2>
      </div>
      <form onSubmit={submitTheData} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="InputEmail1">Title</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword1">Content</label>
          <textarea
            value={paragraph}
            className="form-control"
            required
            onChange={(e) => {
              setParagraph(e.target.value);
            }}
          />
        </div>

        
          <button type="submit" className="btn btn-primary">
            Post Article
          </button>
      </form>
    </div>
  );
}
