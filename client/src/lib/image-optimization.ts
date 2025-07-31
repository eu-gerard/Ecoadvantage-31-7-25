interface ImageLoaderOptions {
  quality?: number;
  sizes?: string;
}

export function createImageLoader(src: string, { quality = 85, sizes }: ImageLoaderOptions = {}) {
  const params = new URLSearchParams();
  if (sizes) params.set('w', sizes);
  if (quality) params.set('q', quality.toString());
  const query = params.toString();
  return {
    src: query ? `${src}?${query}` : src,
    srcSet: query ? `${src}?${query} 1x, ${src}?${query}&dpr=2 2x` : undefined,
    loading: 'lazy',
    decoding: 'async',
  };
}
