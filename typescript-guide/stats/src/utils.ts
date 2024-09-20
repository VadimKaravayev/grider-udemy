export function parseToDate(str: string): Date {
  //'27/10/2018'
  const [day, month, year] = str.split('/').map((val) => parseInt(val));
  return new Date(year, month - 1, day);
}
