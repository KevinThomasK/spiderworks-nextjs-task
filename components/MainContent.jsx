"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import LoadingContainer from "./LoadingContainer";

const MainContent = () => {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(9);
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://kilton-dashboard.spider.ws/api/blogs"
        );
        setArticles(response.data.data);
        setTotalArticles(response.data.data.length);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const loadMoreArticles = () => {
    const remainingArticles = totalArticles - displayedArticles;
    const loadAmount = remainingArticles > 9 ? 9 : remainingArticles;
    setDisplayedArticles(displayedArticles + loadAmount);
  };

  if (loading) {
    return <LoadingContainer />;
  }

  return (
    <>
      <div className="mx-14">
        <p className="text-[10px] mt-4 text-gray-400">Home/Packages</p>
        <p className="text-[10px] mt-4">E-MAG</p>
        <h2 className="text-[30px] font-medium w-[300px] mt-4">
          Discover Trends And Inspiring{" "}
          <span className="font-mono">Stories</span>
        </h2>
        <main className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, displayedArticles).map((article, index) => (
            <Card
              key={index}
              title={article.title}
              image={article.featured_image.file_path}
              date={article.published_on}
              readTime={article.readTime}
              description={article.short_description}
              slug={article.slug}
            />
          ))}
        </main>
      </div>
      {displayedArticles < totalArticles && (
        <div className="text-center mt-8">
          <button
            className="bg-transparent mb-6 rounded-full text-black border border-gray-500 px-4 py-2 hover:bg-blue-200 transition-colors"
            onClick={loadMoreArticles}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default MainContent;

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./Card";
// import LoadingContainer from "./LoadingContainer";

// const MainContent = () => {
//   const [articles, setArticles] = useState([]);
//   const [displayedArticles, setDisplayedArticles] = useState(9);
//   const [totalArticles, setTotalArticles] = useState(0);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get(
//           "https://kilton-dashboard.spider.ws/api/blogs"
//         );
//         setArticles(response.data.data);
//         console.log(response.data.data);
//         setTotalArticles(response.data.data.length);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   const loadMoreArticles = () => {
//     // Calculate how many more articles to display
//     const remainingArticles = totalArticles - displayedArticles;
//     const loadAmount = remainingArticles > 9 ? 9 : remainingArticles;
//     setDisplayedArticles(displayedArticles + loadAmount);
//   };

//   return (
//     <>
//       <div className="mx-14">
//         <p className="text-[10px] mt-4 text-gray-400">Home/Packages</p>
//         <p className="text-[10px] mt-4">E-MAG</p>
//         <h2 className="text-[30px] font-medium w-[300px] mt-4">
//           Discover Trends And Inspiring{" "}
//           <span className="font-mono">Stories</span>
//         </h2>
//         <main className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.slice(0, displayedArticles).map((article, index) => (
//             <Card
//               key={index}
//               title={article.title}
//               image={article.featured_image.file_path}
//               date={article.published_on}
//               readTime={article.readTime}
//               description={article.short_description}
//               slug={article.slug}
//             />
//           ))}
//         </main>
//       </div>
//       {displayedArticles < totalArticles && (
//         <div className="text-center mt-8">
//           <button
//             className="bg-transparent mb-6 rounded-full text-black border border-gray-500 px-4 py-2 hover:bg-blue-200 transition-colors"
//             onClick={loadMoreArticles}
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default MainContent;
