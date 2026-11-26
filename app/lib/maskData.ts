export const maskData = (data: string, long: number) => {
  const last4Digits = data.slice(-long);
  return last4Digits.padStart(data.length, "*");
}