export function slugify(str: string) {
  return encodeURIComponent(slugifyForStaticParams(str));
}

export function slugifyForStaticParams(str: string) {
  return str.toLocaleLowerCase().replaceAll(" ", "-").replaceAll('#', '--sharp');
}

export function unslugify<T>(str: string) {
  const transformed = decodeURIComponent(str.replaceAll('--sharp', '#').replaceAll("-", " "));

  console.log(transformed);

  return (transformed[0].toLocaleUpperCase() + transformed.substring(1)) as T;
}
