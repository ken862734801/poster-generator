import { useState } from "react";

const AsideComponent = () => {
    const [showNav, setShowNav] = useState(false);
    const [navContent, setNavContent] = useState("");

    const handleClick = (content) => {
        setShowNav(true);
        setNavContent(content);
    };
    const hideNav = () => {
        setShowNav(false);
    };
    return (
        <aside>
            <div className="aside-btn-container">
                <div onClick={() => handleClick("search")}>Search</div>
                <div onClick={() => handleClick("text")}>Text</div>
                <div onClick={() => handleClick("color")}>Colors</div>
            </div>
            {showNav && (
                <div className="side-nav">
                    <div className="side-nav-header">
                        <div onClick={() => hideNav()}>&#10006;</div>
                    </div>
                    {navContent === "search" && <div>search</div>}
                    {navContent === "text" && <div>text</div>}
                    {navContent === "color" && <div>colors</div>}
                </div>
            )}
        </aside>
    )
}

export default AsideComponent;