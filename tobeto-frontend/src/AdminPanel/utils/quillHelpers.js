// src/utils/quillHelpers.js
import { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import API_CONFIG from '../../Services/ApiConfig';


Quill.register("modules/imageUploader", ImageUploader);

export const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"]
  ],
  imageUploader: {
    upload: file => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("File", file);
      
          fetch(`${API_CONFIG.IMAGE_ADD}`, {
            method: "POST",
            body: formData, 
          })
          .then(response => response.json())
          .then(result => {
            resolve(result.fileUrl);
          })
          .catch(error => {
            reject("Upload failed");
            console.error("Error:", error);
          });
        });
      }
  }
  
};

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
