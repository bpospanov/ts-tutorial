interface PostCardProps {
    post: Post
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className="card">
            <h2>{post.title}</h2>
            <p>Written by {post.body}</p>
        </div>
    )
}