export function slugify(str: string) {
  return str.toLocaleLowerCase().replaceAll(" ", "-");
}

export function unslugify<T>(str: string) {
  const transformed = str.replaceAll("-", " ");

  return (transformed[0].toLocaleUpperCase() + transformed.substring(1)) as T;
}
