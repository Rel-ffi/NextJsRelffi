import { getAllComments, getAllPosts, getAllUsers } from "@/services/api.service";
import "./InformationComponent.css"
import Link from "next/link";

const InformationComponent = async ({ params }: {params: string}) => {
    if (params === "users") {
        const users = await getAllUsers();
        return (
            <div className="cards-wrapper">
                {users.map((user) => (
                    <Link href={`/${params}/${user.id.toString()}`} key={user.id} className="user-card">
                        <span>Id: {user.id}</span>
                        <span>Name: {user.name}</span>
                        <span>{user.email}</span>
                    </Link>
                ))}
            </div>
        );
    }

    if (params === "posts") {
        const posts = await getAllPosts();
        return (
            <div className="cards-wrapper">
                {posts.map((post) => (
                    <Link href = {`/${params}/${post.id.toString()}`} key={post.id} className="post-card">
                        <span>UserId: {post.userId}</span>
                        <span>PostId: {post.id}</span>
                        <span>{post.title}</span>
                        <span>{post.body}</span>
                    </Link>
                ))}
            </div>
        );
    }

    if (params === "comments") {
        const comments = await getAllComments();
        return (
            <div className="cards-wrapper">
                {comments.map((comment) => (
                    <Link href ={`/${params}/${comment.id.toString()}`} key={comment.id} className="comment-card">
                        <span>PostId: {comment.postId}</span>
                        <span>Id: {comment.id}</span>
                        <span>{comment.name}</span>
                        <span>{comment.email}</span>
                    </Link>
                ))}
            </div>
        );
    }

    return <></>;
};

export default InformationComponent;
