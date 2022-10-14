import { ImageLoader } from 'next/future/image';

export const nextImageLoader: ImageLoader = ({ src, width, quality }) => {
  return `.${src}?w=${width}&q=${quality}`;
};
