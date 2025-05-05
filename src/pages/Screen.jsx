import topRightImage from '../assets/candyshapes.png'; // Update with your image path
import bottomLeftImage from '../assets/candyshapes.png'; // Update with your image path

const Screen = () => {
  return (
    <div className="relative min-h-screen w-full bg-yourBackgroundColor"> {/* Replace bg-yourBackgroundColor with your actual background color class */}
      {/* Top Right Image */}
      <div className="absolute top-0 right-0 p-4">
        <img 
          src={topRightImage} 
          alt="Top Right" 
          className="w-32 h-32 object-cover" // Adjust size as needed
        />
      </div>

      {/* Bottom Left Image */}
      <div className="absolute bottom-0 left-0 p-4">
        <img 
          src={bottomLeftImage} 
          alt="Bottom Left" 
          className="w-32 h-32 object-cover" // Adjust size as needed
        />
      </div>

      {/* Your other content goes here */}
    </div>
  );
};

export default Screen;