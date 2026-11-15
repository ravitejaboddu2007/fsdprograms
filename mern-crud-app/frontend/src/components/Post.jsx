import { useNavigate } from "react-router-dom";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").replace(/\/+$/, "");

function Post({ post }) {
  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/update-post/${post._id}`);
  };

  const handleDelete = async () => {
    await fetch(`${API_BASE}/api/v1/posts/${post._id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="post">
      <div className="post-title">{post.title}</div>
      <div className="post-content">{post.content}</div>
      <div className="post-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Post;