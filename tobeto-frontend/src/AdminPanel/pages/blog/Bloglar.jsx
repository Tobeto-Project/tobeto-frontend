// Bloglar.js

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'react-toastify';
import { getBlogs, deleteBlog, updateBlog } from '../../services/blogService';
import ReactQuill from 'react-quill';

const Bloglar = () => {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [editableBlog, setEditableBlog] = useState({ id: '', title: '', text: '' });

  const handleShow = (blog) => {
    setEditableBlog(blog);
    setShow(true);
  };  const handleClose = () => setShow(false);

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
      toast.success("Blog başarıyla silindi!");
    }
  };

  const handleUpdate = async () => {
    const { id, title, text } = editableBlog;
    const isUpdated = await updateBlog(id, title, text);
    if (isUpdated) {
      const updatedBlogs = blogs.map(blog => {
        if (blog.id === id) {
          return { ...blog, title, text };
        }
        return blog;
      });
      setBlogs(updatedBlogs);
      handleClose();
      toast.success("Blog başarıyla güncellendi!");
    }
  };

  const handleTitleChange = (e) => {
    setEditableBlog({ ...editableBlog, title: e.target.value });
  };

  const handleTextChange = (value) => {
    setEditableBlog({ ...editableBlog, text: value });
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
    <>
      <div>
        <Table striped bordered hover variant="light" className='me-5'>
          <thead>
            <tr>
              <th>#</th>
              <th>Blog Başlık</th>
              <th>Blog İçerik</th>
              <th>Blog Ayarları</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td><div dangerouslySetInnerHTML={createMarkup(blog.text)} /></td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(blog.id)}>Sil</Button>
                  <Button variant="warning ms-2" onClick={() => handleShow(blog)}>Güncelle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Blog Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Başlık Düzenleme</Form.Label>
            <Form.Control type="text" placeholder='Başlık' value={editableBlog.title} onChange={handleTitleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>İçerik Düzenleme</Form.Label>
            <ReactQuill theme="snow" value={editableBlog.text} onChange={handleTextChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Kapat</Button>
          <Button variant="primary" onClick={handleUpdate}>Kaydet</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Bloglar;
