import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert';
import moment from 'moment';
import URL from "../url";

export default function PostsList(props) {
  const [article, setArticle] = useState([]);

  const deletePost = (id) => {
    axios.delete(`${URL}/posts/delete/` + id)
      .then((res) => {
        Swal("Success!", "You post is deleted Successfully!", "success");
        setArticle(article.filter((elem) => elem._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card mt-1 card-body">
      <Link
        className="text-dark"
        to={{ pathname: "/post/" + props.article._id }}
      >
        <h2 className="card-title">{props.article.title}</h2>
      </Link>
      <p className="card-text">{props.article.paragraph}</p>
      <h5>- {props.article.author}</h5>
      <p>({moment(props.article.createdAt).format('LLL')})</p>

      {!props.own ? (
        ""
      ) : (
        <div className="d-flex justify-content-between">
          <Link
            to={{ pathname: "/edit/" + props.article._id }}
            className="btn btn-outline-warning"
            type=""
          >
            Edit Article
          </Link>
          <button
            onClick={() => {
              deletePost(props.article._id);
            }}
            className="btn btn-outline-danger"
          >
            Delete Article
          </button>
        </div>
      )}
    </div>
  );
}
