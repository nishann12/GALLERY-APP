import React from 'react'

export default function Card({item}) {
    return (
        <div className="col-md-2 col-sm-4 mb-4">
        <div className="card">
            <div
                className="card-img-top bg-white d-flex align-items-center justify-content-center" style={{ height: "150px" }}>
                <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: "100", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="card-body text-center">
                <p className="card-text">{item.title}</p>
            </div>
        </div>
        </div>
    )
}
