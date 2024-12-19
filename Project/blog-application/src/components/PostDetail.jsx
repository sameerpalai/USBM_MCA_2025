import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // Get the post id from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch post details');
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading post details...</p>}
      {error && <p>{error}</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
