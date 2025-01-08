import React from "react";
import Card from "./card";

const GalleryApp = () => {
  const items = [
    { id: 1, title: "Image 1", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 2, title: "Image 2", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 3, title: "Image 3", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 4, title: "Image 4", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 5, title: "Image 5", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400g" },
    { id: 6, title: "Image 6", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 7, title: "Image 7", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 8, title: "Image 8", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 9, title: "Image 8", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 10, title: "Image 8", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
  ];

  return (
    <div className="container my-4">
      <h1 className="text-center"> Gallery App</h1>
      <div className="row">
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default GalleryApp;
