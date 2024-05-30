import Image from "next/image";
import React from "react";

export default function ImageCard({
    src,
    title,
    description,
    actionButtons
}) {
    return (
        <div className="card w-52 bg-base-100 shadow-xl">
            <figure className="max-w-sm h-auto flex items-center justify-center">
                <Image
                    width={2000}
                    height={2000}
                    className="w-full h-full"
                    src={src}
                    alt={title}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {actionButtons.map((value, index) => {
                        return (
                            <button
                                key={index}
                                className="btn btn-primary"
                                onClick={value.onClick}
                            >
                                {value.text}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
