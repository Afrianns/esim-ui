
export const maskData = (data: string, long: number) => data.slice(-long).padStart(data.length, "*");