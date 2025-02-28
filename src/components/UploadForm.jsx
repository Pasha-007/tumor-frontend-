import { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select an image file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/predict/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error uploading file:", error);
      setPrediction("Error processing the image.");
    }
    setLoading(false);
  };

  return (
    <div className="upload-container">
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>
        {loading ? "Processing..." : "Upload & Predict"}
      </button>

      {prediction && <p className="result">Prediction: {prediction}</p>}
    </div>
  );
};

export default UploadForm;