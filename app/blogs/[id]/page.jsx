"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://kilton-dashboard.spider.ws/api/blogs/${params.id}`
        );
        setBlog(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticle();
  }, []);

  return (
    <div className="mx-14 sm:mx-[50px] md:mx-[150px] lg:mx-[250px] ">
      <h2 className="mt-7 mb-6 text-xl font-semibold">{blog?.title}</h2>
      <img
        src={blog?.banner_image?.file_path}
        alt="banner"
        className="rounded h-[400px] w-[100%]"
      />
      <h4 className="font-semibold mt-7">Introduction</h4>
      <p className="text-gray-500 mt-5 text-sm">{blog?.meta_description}</p>
      <h4 className="font-semibold mt-7">{blog.browser_title}</h4>
    </div>
  );
}

export default page;
