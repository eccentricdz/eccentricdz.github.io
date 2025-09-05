import React from "react";

export const SuspenseImage = ({ src, alt, fallbackSrc }) => {
    imageCache.read(src);
    return <img src={src} alt={alt} onError={(e) => {
        if (fallbackSrc) {
            e.target.src = fallbackSrc;
        }
    }} />
}

const imageCache = {
    __cache: {},
    read(src) {
        if (!this.__cache[src]) {
            this.__cache[src] = new Promise((resolve) => {
                const image = new Image();
                image.onload = () => {
                    this.__cache[src] = true;
                    resolve(this.__cache[src]);
                }
                image.onerror = () => {
                    this.__cache[src] = false;
                    resolve(this.__cache[src]);
                }
                image.src = src;
            });
        }
        if (this.__cache[src] instanceof Promise) {
            throw this.__cache[src];
        }
        return this.__cache[src];
    }
}