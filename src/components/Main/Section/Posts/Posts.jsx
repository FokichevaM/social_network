import React from "react";
import './Posts.css';
import img from '../../../Header/img/instagram-icon.webp';

const Post = (props) => {
	return (
		<div className="posts">
			<img src={img} alt="" />
			<p>{props.message}</p>
			<button>Like {props.likes}</button>
		</div>
	)
}

let posts = [
	{ id: 1, mesaage: 'first messaage', likecount: 2 },
	{ id: 2, mesaage: '2 messaage', likeCount: 5 },
	{ id: 3, mesaage: '3 messaage', likeCount: 88 },
	{ id: 4, mesaage: '4 messaage', likeCount: 43 },
	{ id: 5, mesaage: '5 messaage', likeCount: 79 },
	{ id: 6, mesaage: '6 messaage', likeCount: 234 },
]

let postItem = posts.map(post => <Post message={post.mesaage} likes={post.likeCount}></Post>)

const Posts = () => {
	return (
		<div>
			{postItem}
		</div>
	)
}

export default Posts;