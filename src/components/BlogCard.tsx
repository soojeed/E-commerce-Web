import React from "react";

type PropsType = {
  img?: string;
  title?: string;
  comment?: number;
  date?: string;
};

const BlogCard: React.FC<PropsType> = ({ img, title, date, comment }) => {
  return (
    <div className="space-y-4 bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
      
      <img
        className="rounded-lg hover:scale-105 transition-transform w-full h-48 object-cover"
        src={img}
        alt="post"
      />

      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      <div className="flex justify-between text-sm text-gray-500 font-medium">
        <span>{date}</span>
        <span>{comment} Comments</span>
      </div>

    </div>
  );
};

export default BlogCard;