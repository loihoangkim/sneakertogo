import React from 'react';
import axios from 'axios';

const ProductFormImage2 = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    var fileName = document.getElementById("inputName").value + '(2).png';
    formData.append("fileName",fileName );
    formData.append("file", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "https://localhost:7193/api/v1/Files",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" id='submituploadProduc2' style={{display:'none'}} />
    </form>
  )
};

export default ProductFormImage2;