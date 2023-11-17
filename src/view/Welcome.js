import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../component/loadingComponent';
function Welcome() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const goToInfo = () => {
    setIsLoading(true);
    // Simulate a delay before navigation
    setTimeout(() => {
      navigate('/info');
    }, 1000); // 2 seconds delay
  };

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="full-screen-center">
      <div style={{textAlign:'center'}}>
        <div className="welcome-message">Welcome</div>
        <button onClick={goToInfo}>Go to Info Page</button>
      </div>
    </div>
  );
}

export default Welcome;
