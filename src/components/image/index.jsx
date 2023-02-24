import "./image.css";

const ImageComponent = (props) => {
    const {setImage} = props;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
    return (
        <div>
            <div></div>
            <input type="file" onChange={handleImageUpload}/>
        </div>
    )
};

export default ImageComponent;