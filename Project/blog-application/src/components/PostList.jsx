import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch posts data from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
