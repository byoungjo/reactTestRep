import React from "react";
import Comment from "./Comment";
const comments = [
    {
        name : "홍길동",
        comment : "안녕 홍길동이다"
    },
    {
        name : "이순신",
        comment : "안녕 이순신이다"
    },
    {
        name : "안중근",
        comment : "안녕 안중근이다"
    }
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    )
}

export default CommentList;