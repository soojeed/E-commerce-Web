import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="container mx-auto pt-16 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Latest Blogs
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <BlogCard
          img="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
          title="Learn React Easily"
          date="Feb 28, 2026"
          comment={12}
        />

        <BlogCard
          img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          title="Understanding TypeScript"
          date="Mar 01, 2026"
          comment={8}
        />

        <BlogCard
          img="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
          title="Tailwind CSS Guide"
          date="Mar 02, 2026"
          comment={25}
        />

      </div>
    </div>
  );
};

export default BlogSection;