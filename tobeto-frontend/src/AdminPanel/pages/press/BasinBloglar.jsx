import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import { deletePress, getPress, updatePress } from '../../services/pressBlogService';

const BasinBloglar = () => {
    const [press, setPress] = useState([]);
    const [show, setShow] = useState(false);
    const [editablePress, setEditablePress] = useState({ id: '', title: '', text: '' });
  
    const handleShow = (press) => {
      setEditablePress(press);
      setShow(true);
    };  const handleClose = () => setShow(false);
  
    useEffect(() => {
      const fetchPress = async () => {
        const fetchedPress = await getPress();
        setPress(fetchedPress);
      };
  
      fetchPress();
    }, []);
  
    const handleDelete = async (pressId) => {
      const isDeleted = await deletePress(pressId);
      if (isDeleted) {
        setPress(press.filter(press => press.id !== pressId));
        toast.success("Blog başarıyla silindi!");
      }
    };
  
    const handleUpdate = async () => {
      const { id, title, text } = editablePress;
      const isUpdated = await updatePress(id, title, text);
      if (isUpdated) {
        const updatedPress = press.map(press => {
          if (press.id === id) {
            return { ...press, title, text };
          }
          return press;
        });
        setPress(updatedPress);
        handleClose();
        toast.success("Blog başarıyla güncellendi!");
      }
    };
  
    const handleTitleChange = (e) => {
      setEditablePress({ ...editablePress, title: e.target.value });
    };
  
    const handleTextChange = (value) => {
      setEditablePress({ ...editablePress, text: value });
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
              <th>Basın Blog Başlık</th>
              <th>Basın Blog İçerik</th>
              <th>Basın Blog Ayarları</th>
            </tr>
          </thead>
          <tbody>
            {press.map((press, index) => (
              <tr key={press.id}>
                <td>{index + 1}</td>
                <td>{press.title}</td>
                <td><div dangerouslySetInnerHTML={createMarkup(press.text)} /></td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(press.id)}>Sil</Button>
                  <Button variant="warning ms-2" onClick={() => handleShow(press)}>Güncelle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Press Blog Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Başlık Düzenleme</Form.Label>
            <Form.Control type="text" placeholder='Başlık' value={editablePress.title} onChange={handleTitleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>İçerik Düzenleme</Form.Label>
            <ReactQuill theme="snow" value={editablePress.text} onChange={handleTextChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Kapat</Button>
          <Button variant="primary" onClick={handleUpdate}>Kaydet</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BasinBloglar