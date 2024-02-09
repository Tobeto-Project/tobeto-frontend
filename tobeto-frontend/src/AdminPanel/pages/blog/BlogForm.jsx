import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

function BlogForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, text };
    // API'ye POST isteği gönder
    try {
      const response = await fetch('http://localhost:5082/api/Blogs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });
      if (response.ok) {
        toast.success('Blog başarıyla eklendi');
      } else {
        toast.error('Blog eklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Blog eklenirken bir hata oluştu', error);
    }
  };

  return (
    <Container className='mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBlogTitle">
          <Form.Label>Blog Başlığı</Form.Label>
          <Form.Control
            type="text"
            placeholder="Başlık girin"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBlogText">
          <Form.Label>Blog İçeriği</Form.Label>
          <ReactQuill theme="snow" value={text} onChange={setText} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Blog Ekle
        </Button>
      </Form>
    </Container>
  );
}

export default BlogForm;
