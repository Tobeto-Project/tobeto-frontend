import React, { useState, useEffect, useRef } from "react";
import { getImages, deleteImage, addImage } from "../../services/imageService";
import { Container, Row, Col, Button } from "react-bootstrap";

function ImageList() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    getImages().then(data => {
      console.log(data); // API'den gelen veriyi konsolda kontrol edin
      setImages(data || []); // veya setImages(data || []);
    });
  };

  const handleDelete = (id) => {
    deleteImage(id).then(fetchImages);
  };

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard!");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      addImage(file).then(fetchImages);
    }
  };

  // images dizisini 3'erli gruplara ayırma
  const chunkedImages = chunk(images, 3);

  return (
    <Container>
      <Button onClick={() => fileInputRef.current.click()} className="mb-3">Add Image</Button>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      {chunkedImages.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <img src={image.fileUrl} alt={image.fileName} style={{ width: "350px", height: "250px" }} />
              <div className="mt-2">
                <Button variant="danger" onClick={() => handleDelete(image.id)}>Delete</Button>
                <Button variant="secondary" onClick={() => handleCopyUrl(image.fileUrl)} className="ms-2">Copy URL</Button>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

// images dizisini 3'erli gruplara ayırma işlevi
function chunk(array, size) {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i += size) {
    chunked_arr.push(array.slice(i, i + size));
  }
  return chunked_arr;
}

export default ImageList;
