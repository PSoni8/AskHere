import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import '../css/Post.css';
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import { selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import db from "../firebase";
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase";
function Post({ id, question, image, timestamp, quoraUser }) {
    const [OpenModal, setOpenModal] = useState(false);
  return (
    <div className="post">
        <div className="post_info">
        <Avatar
          src={quoraUser.photo ? quoraUser.photo
            : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
        }
        />
            
        <h4>{quoraUser.displayName ? quoraUser.displayName : quoraUser.email}</h4>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className="post_body">
             <div className="post_question">
                 <p>{question}</p>
                 <button onClick={() => setIsModalOpen(true)} className="post_btnAnswer">Answer</button>
                 <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
             </div>
             <div className="post_answer">
             <p></p>
             </div>
             <img scr={image} alt=""/>
            </div> 
            <div className="post_footer">
                <div className="post_footerAction">
                    <ArrowUpwardOutlinedIcon/>
                    <ArrowDownwardOutlinedIcon/>
                </div>
                <RepeatOutlinedIcon/>
                <ChatBubbleOutlineOutlinedIcon/>
                <div className="post_footerLeft">
                    <ShareOutlined/>
                    <MoreHorizOutlined/>
                </div>
            </div>      
    </div>
);
}

export default Post;