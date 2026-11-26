export const formatDateToTime = (date: Date) => date.toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
});


export const formatDateToLocaleDate = (date: Date) => date.toLocaleDateString('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});