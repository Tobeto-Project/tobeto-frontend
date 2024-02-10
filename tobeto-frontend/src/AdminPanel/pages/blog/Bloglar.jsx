// Bloglar.js

import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'react-toastify';
import { getBlogs, deleteBlog } from '../../services/blogService';

const Bloglar = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    const isDeleted = await deleteBlog(blogId);
    if (isDeleted) {
      setBlogs(blogs.filter(blog => blog.id !== blogId));
    }
  };

  const truncateHtml = (html, maxLength) => {
    const strippedString = html.replace(/(<([^>]+)>)/gi, "");
    if (strippedString.length > maxLength) {
      return strippedString.substring(0, maxLength) + "...";
    }
    return strippedString;
  };

  const createMarkup = (htmlContent) => {
    const truncatedContent = truncateHtml(htmlContent, 100);
    const sanitizedContent = sanitizeHtml(truncatedContent, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'u']),
      allowedAttributes: {}
    });
    return { __html: sanitizedContent };
  };

  return (
    <div>
      <Table striped bordered hover variant="light" className='me-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Blog Başlık</th>
            <th>Blog İçerik</th>
            <th>Blog Sil</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>
              <td>{blog.title}</td>
              <td><div dangerouslySetInnerHTML={createMarkup(blog.text)} /></td>
              <td><Button variant="danger" onClick={() => handleDelete(blog.id)}>Sil</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Bloglar;
