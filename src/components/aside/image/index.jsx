import "./image.css";
import { useEffect, useState } from "react";
import { RefreshOutlined } from "@material-ui/icons";

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

  return (
    <div className="image-component">
        <div className="image-container">
          <p>Default</p>
          <div className="default-container">
            <img src={initialValue.defaultImage} onClick={() => setImage(initialValue.defaultImage)}></img>
          </div>
          <p>Gallery</p>
          <div className="gallery-container">
            {imageList.map((img, index) => (
              <img key={index} src={img} onClick={() => setImage(img)} />
            ))}
          </div>
        </div>
        <input type="file" id="file" className="hidden" onChange={handleImageUpload} />
        <label htmlFor="file">Click here</label>
        <div className="refresh-btn-container">
          <RefreshOutlined className="refresh-btn" onClick={handleReset} />
        </div>
    </div>
  );
};

export default ImageComponent;