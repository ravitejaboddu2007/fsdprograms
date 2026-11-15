import { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").replace(/\/+$/, "");

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${API_BASE}/api/v1/posts`);
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="posts-container">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
