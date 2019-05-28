export function formatReadingTime(minutes){
  let cups = Math.round(minutes / 5);
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min de lecture`;
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min de lecture`;
  }
}


export function formatPostDate(date) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  const args = [
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}
