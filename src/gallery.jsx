import React from "react";

const GalleryApp = () => {
  const items = [
    { id: 1, title: "Image 1",src : "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 2, title: "Image 2", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400"},
    { id: 3, title: "Image 3", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 4, title: "Image 4", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 5, title: "Image 5", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400g" },
    { id: 6, title: "Image 6", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 7, title: "Image 7", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
    { id: 8, title: "Image 8", src: "https://frasermotorcycles.com.au/cdn/shop/files/2024-SportsterS-BilliardGray_1024x.jpg?v=1704851400" },
  ];

  return (
    <div className="container my-4">
      <h1 className="text-center"> Gallery App</h1>
      <div className="row">
        {items.map((item)=>(
          <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
            <div className="card">
              <div
              className="card-img-top bg-white d-flex align-items-center justify-content-center" style={{ height:"150px"}}>
                <img
                src={item.src}
                alt= {item.title}
                style={{width:"100", height: "100%", objectFit:"cover" }}/>
              </div>
              <div className="card-body text-center">
                <p className="card-text">{item.title}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryApp;
