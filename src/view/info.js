import React, { useState } from "react";
import ImageComponent from "../component/ImageComponent";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../component/loadingComponent";
function Info() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const goBack = () => {
    setIsLoading(true);
    // Simulate a delay before navigation
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="full-screen-center">
      <div className="info-container">
        <ImageComponent src="/profile.jpg" alt="Description" />
        <p className="info-text">{`ภูริวัฒน์ พุกหน - 6304354`}</p>
        <button onClick={goBack}>Go back to Home Page</button>
      </div>
    </div>
  );
}

export default Info;
