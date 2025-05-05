import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiAirplayvideo } from "react-icons/si";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { useState } from 'react';
import NewsLetterSubscribe from "../components/NewsLetterSubscribe";
import { contentsData } from "../datas/contents";

// Define content types with their respective icons and labels
const contentTypes = {
  articles: {
    icon: <LuFileSpreadsheet className="text-4xl text-red-200" />,
    actionLabel: "Read More",
    tabLabel: "Medium Articles"
  },
  videos: {
    icon: <SiAirplayvideo className="text-4xl text-red-200" />,
    actionLabel: "Watch Video",
    tabLabel: "YouTube Videos"
  },
  audio: {
    icon: <IoPlaySkipForwardOutline className="text-4xl text-red-200" />,
    actionLabel: "Listen",
    tabLabel: "Audio Files"
  }
};



const Contents = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const renderContentCards = () => {
    const currentContent = contentsData[activeTab] || [];
    
    return currentContent.map((item) => {
      const maxTitleLength = 50; // Adjust based on your layout
      const maxDescLength = 100; // Adjust based on your layout

      const shortenedTitle = item.title.length > maxTitleLength 
        ? `${item.title.substring(0, maxTitleLength)}...` 
        : item.title;

      const shortenedDesc = item.description.length > maxDescLength 
        ? `${item.description.substring(0, maxDescLength)}...` 
        : item.description;

      return (
        <div 
          key={`${activeTab}-${item.id}`} 
          className="bg-slate-800 p-6 text-white rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
        >
          <div className="h-32">
            {contentTypes[activeTab].icon}
          </div>
          <div>
            <p className="text-lg font-bold line-clamp-1" title={item.title}>
              {isExpanded ? item.title : shortenedTitle}
            </p>
            <p className="text-gray-300 mt-2 line-clamp-2" title={item.description}>
              {isExpanded ? item.description : shortenedDesc}
            </p>
            {item.date && (
              <p className="text-gray-400 text-sm mt-1">
                {new Date(item.date).toLocaleDateString()}
              </p>
            )}
            <div className="flex gap-2">
              <a
                target="_blank"
                href={item.link}
                className="flex items-center border w-fit mt-4 px-4 py-2 rounded-4xl font-medium hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                <p>{contentTypes[activeTab].actionLabel}</p> 
                <MdOutlineKeyboardArrowRight className="mt-1" />
              </a>
              {/*  */}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <section className="bg-blue-600 h-96 text-center text-white">
        <h2 className="pt-20 font-semibold text-2xl md:text-4xl">Resource Center</h2>
        <p className="pt-4 text-sm md:text-lg">Get Resources to Learn everything about the blockchain from basics to advance</p>
      </section> 
      
      {/* Featured Cards Section */}
      <section className="max-w-6xl mx-auto">
        <div className="my-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(contentTypes).map(([type, { icon, actionLabel }]) => (
            <div 
              key={type} 
              className="bg-slate-800 p-6 text-white rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="h-32">
                {icon}
              </div>
              <div>
                <p className="text-xl">
                  Understanding the blockchain dynamics
                </p>
                <a
                  href="#"
                  className="flex items-center border w-fit mt-4 px-4 py-2 rounded-4xl font-medium hover:bg-blue-600 hover:border-blue-600 transition-colors"
                >
                  <p>{actionLabel}</p> 
                  <MdOutlineKeyboardArrowRight className="mt-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Tabbed Content Section */}
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center my-8 border-b border-gray-200">
          {Object.entries(contentTypes).map(([type, { tabLabel }]) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`py-4 px-6 font-medium text-sm md:text-base cursor-pointer ${
                activeTab === type 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tabLabel}
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className="max-w-6xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderContentCards()}
        </div>
      </div>

      <NewsLetterSubscribe />
    </section>
  );
}

export default Contents;