import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';

const Bloglar = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5082/api/Blogs/getList?PageIndex=0&PageSize=30');
        if (!response.ok) throw new Error('Blog verisi çekilemedi');
        const data = await response.json();
        setBlogs(data.items); // Varsayılan olarak API'den gelen veri yapısına bağlı
      } catch (error) {
        console.error("Bloglar yüklenirken bir hata oluştu:", error);
      }
    };

    fetchBlogs();
  }, []);

  const deleteBlog = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:5082/api/Blogs/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blogId }),
      });
      if (!response.ok) throw new Error('Blog silinirken bir hata oluştu');
      setBlogs(blogs.filter(blog => blog.id !== blogId)); // Silinen blogu UI'dan kaldır
    } catch (error) {
      console.error("Blog silinirken bir hata oluştu:", error);
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
                        <td><Button variant="danger" onClick={() => deleteBlog(blog.id)}>Sil</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  );
}

export default Bloglar;
