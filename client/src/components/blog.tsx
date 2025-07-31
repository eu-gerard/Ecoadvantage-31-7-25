import React from "react";
import blogPosts from "@/data/blogPosts.json";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  content: string;
};

const Blog: React.FC = () => {
  return (
    <main className="bg-eco-light-gray min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-eco-black mb-8 text-center">
          Our Blog
        </h1>

        {blogPosts.map((post: BlogPost) => (
          <article key={post.id} className="mb-12 border-b pb-6">
            <h2 className="text-2xl font-semibold text-eco-red mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-4 italic">{post.date}</p>
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">{post.content}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Blog;