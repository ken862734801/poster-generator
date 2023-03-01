import "./image.css";
import { useEffect, useState } from "react";
import Reset from "../reset";

const ImageComponent = (props) => {
  const { image, setImage } = props;

  const [initialValue, setInitialValue] = useState({
    defaultImage: image
  });

  useEffect(() => {
    setInitialValue({
      defaultImage: image
    });
  }, []);


  const handleReset = () => {
    if (isValidImageUrl(initialValue.defaultImage)) {
      setImage(initialValue.defaultImage);
    } else {
      console.error("Default image is not a valid URL");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
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
    <div className="image-container">
      <input type="file" onChange={handleImageUpload} />
      <Reset onClick={handleReset}/>
    </div>
  );
};

export default ImageComponent;