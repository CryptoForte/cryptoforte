import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ResourcesLayout = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <section className="">
      <section className="bg-blue-600 h-96 text-center text-white">
        <h2 className="pt-20 font-semibold text-xl md:text-4xl">Resource Center</h2>
        <p className="pt-4">Get Resources to Learn everything about the blockchain from basics to advance</p>
      </section> 
      
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center my-8 border-b border-gray-200">
          <Link
            to="articles"
            className={`py-4 px-6 font-medium text-sm md:text-base ${isActive('articles') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Medium Articles
          </Link>
          <Link
            to="videos"
            className={`py-4 px-6 font-medium text-sm md:text-base ${isActive('videos') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            YouTube Videos
          </Link>
          <Link
            to="audio"
            className={`py-4 px-6 font-medium text-sm md:text-base ${isActive('audio') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Audio Files
          </Link>
        </div>

        {/* Content will be rendered here */}
        <Outlet />
      </div>
    </section>
  );
};

export default ResourcesLayout;