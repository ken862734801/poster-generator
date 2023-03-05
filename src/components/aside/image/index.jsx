import "./image.css";
import { useEffect, useState } from "react";
import uploadImage from "../../../images/upload-image.jpg";
import { RefreshOutlined, RemoveCircleOutlineOutlined, HighlightOff } from "@material-ui/icons";

const ImageComponent = (props) => {
  const { image, setImage } = props;

  const [imageList, setImageList] = useState([]);
  const [initialValue, setInitialValue] = useState({
    defaultImage: image
  });

  useEffect(() => {
    setInitialValue({
      defaultImage: image
    });
    const localImageList = JSON.parse(localStorage.getItem("imageList"));
    if(Array.isArray(localImageList)){
      setImageList(localImageList);
    }
  }, [initialValue.defaultImage]);


  const handleReset = () => {
    if (isValidImageUrl(initialValue.defaultImage)) {
      setImageList([]);
      // setImage(initialValue.defaultImage);
      localStorage.clear();
    } else {
      console.error("Default image is not a valid URL");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageList([...imageList, reader.result]);
      localStorage.setItem("imageList", JSON.stringify([...imageList, reader.result]));
    };
    reader.readAsDataURL(file);
  };

  
  const isValidImageUrl = (url) => {
    if (!url) {
      return false;
    }
    return !!url.match(/\.(jpeg|jpg|gif|png)$/) || url.startsWith("data:image/");
  };

  const handleImageClick = (imageUrl) => {
    const posterImage = document.getElementById("poster-image");
    posterImage.src = imageUrl;
  };

  const handleImageDelete = (imageUrl) => {
    const updatedImageList = imageList.filter((img) => img !== imageUrl);
    setImageList(updatedImageList);
    localStorage.setItem("imageList", JSON.stringify(updatedImageList));
  };
  return (
    <div className="image-component">
        <div className="gallery">
          {/* <p>Original</p>
          <div className="default-container">
            <img src={initialValue.defaultImage} onClick={() => setImage(initialValue.defaultImage)}></img>
          </div> */}
          <div className="gallery-container">
            {imageList.length === 0 ? (
              <div className="empty-container">
                <img src={uploadImage}/>
                <p>Your uploaded images will appear here</p>
              </div>
            ) : (
              imageList.map((img, index) => (
                <div key={index} className="thumbnail-container">
                  <HighlightOff
                    fontSize="small"
                    className="delete-btn"
                    onClick={() => handleImageDelete(img)}
                  />
                  <img
                    src={img}
                    onClick={() => {
                      setImage(img);
                      handleImageClick(img);
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="label-container">
          <input type="file" id="file" className="hidden" onChange={handleImageUpload} />
            <label id="label" htmlFor="file">Upload</label>
        </div>

        {/* <div className="refresh-btn-container">
          <RefreshOutlined className="refresh-btn" onClick={handleReset} />
        </div> */}

    </div>
  );
};

export default ImageComponent;