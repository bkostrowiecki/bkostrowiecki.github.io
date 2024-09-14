export function slugify(str: string) {
  return encodeURIComponent(str.toLocaleLowerCase().replaceAll(" ", "-"));
}

export function unslugify<T>(str: string) {
  const transformed = decodeURIComponent(str.replaceAll("-", " "));

  return (transformed[0].toLocaleUpperCase() + transformed.substring(1)) as T;
}
