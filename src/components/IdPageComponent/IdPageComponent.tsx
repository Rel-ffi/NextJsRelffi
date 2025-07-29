import {getCommentById, getPostById, getUserById} from "@/services/api.service";
import "./IdPageComponent.css"

interface IdPageProps  {
    params: {
        item: string;
        id: string;
    }
}
const IdPageComponent = async ({ params }: IdPageProps) => {
    const {item, id } = params;
    if (item == "users") {
        const user = await getUserById(id);
        return (
            <div className="Card-Id-Wrapper">
                <div className="Card-Id">
                    <span>Id: {user.id}</span>
                    <span>Name: {user.name}</span>
                    <span>{user.email}</span>
                </div>
            </div>
        )
    }

    if (item == "posts") {
        const post = await getPostById(id);
        return (
            <div className="Card-Id-Wrapper">
                <div className="Card-Id">
                    <span>UserId: {post.userId}</span>
                    <span>PostId: {post.id}</span>
                    <span>{post.title}</span>
                    <span>{post.body}</span>
                </div>
            </div>
        )
    }

    if (item == "comments") {
        const comment = await getCommentById(id);
        return (
            <div className="Card-Id-Wrapper">
                <div className="Card-Id">
                    <span>PostId: {comment.postId}</span>
                    <span>Id: {comment.id}</span>
                    <span>{comment.name}</span>
                    <span>{comment.email}</span>
                    <span>{comment.body}</span>
                </div>
            </div>
        )
    }

    return <></>;
};

export default IdPageComponent;