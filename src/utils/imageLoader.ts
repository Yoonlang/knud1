import { ImageLoader } from 'next/future/image';

export const nextImageLoader: ImageLoader = ({ src, width, quality }) => {
  return `.${src}?w=${width}&q=${quality}`;
};

export const testNextImageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality}`;
};
