import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../css/homeStyle.css";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from 'react-spinners'
import Swal from "sweetalert"
import moment from "moment";

export default function Post() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [date, setDate] = useState("");
  const [postId, setPostId] = useState("");
  const [author, setAuthor] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/posts/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setParagraph(res.data.paragraph);
        setDate(moment(res.data.createdAt).format('LLL'));
        setPostId(res.data._id);
        setComments(res.data.comment);
        setAuthor(res.data.author);
        setCommentAuthor(sessionStorage.getItem("username"));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const commentAdd = (e) => {
    e.preventDefault();
    setCommentAuthor(sessionStorage.getItem("username"));
    const sendComment = { comment: message, author: commentAuthor };
    axios
      .put("/posts/comment-add/" + postId, sendComment)
      .then(() => {
        setMessage("");
        Swal("Success!", `Comments added! -by ${commentAuthor}`, "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container card">
      {!title && !paragraph && !date ? (
        <div className="spinner-parent">
        <ClimbingBoxLoader color={'#4a148c'} loading={loading} />
        </div>
      ) : (
        <div className="card mt-3 p-2">
          <h1 className="card-title">{title}</h1>
          <p>{paragraph}</p>
          <h5>- {author}</h5>
          <p>({date})</p>
            <Link type=""
              className="btn btn-primary mb-3"
              to="/"
              style={{background:"#7b1fa2",width:"20%"}}
            >
            Back to Home
          </Link>
          <div>
            <div>
              <h3>Comments : </h3>
              {comments.map((comment, key) => {
                return (
                  <div className="d-flex">
                    <h5>{comment.author} : </h5>
                    <p> {comment.comment}</p>
                  </div>
                );
              })}
            </div>
            {!sessionStorage.getItem("isLogged") ? (
              <div className="d-flex justify-content-center pb-3">
                Login to Comment
              </div>
            ) : (
              <form onSubmit={commentAdd}>
                <input
                  className="form-control"
                  value={message}
                  required
                  placeholder="Add Comment ..."
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                    <button
                      className="btn btn-primary mt-2"
                      type="submit"
                      style={{background:"#7b1fa2",width:"20%"}}
                    >
                  Comment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
