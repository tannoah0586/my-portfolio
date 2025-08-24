import React, { useState } from "react";
import "./Blog.css";

const Blog = ({ blogs }) => {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h1>Blog</h1>
        <p>Welcome to my blog! Here, I share insights, tutorials, and updates on my projects and tech journey.</p>
        <div className="blog-posts">
          {blogs.length > 0 ? (
            blogs.map((post) => (
              <div key={post.id} className="blog-post">
                <h2>{post.title}</h2>
                <p className="post-date">{post.date}</p>
                <p>{post.excerpt}</p>
                {expandedPost === post.id && <p className="post-content">{post.content}</p>}
                <button
                  onClick={() => togglePost(post.id)}
                  className="read-more"
                >
                  {expandedPost === post.id ? "Show Less" : "Read More"}
                </button>
              </div>
            ))
          ) : (
            <p>No blog posts yet. Check back soon for updates!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;