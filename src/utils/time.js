export function timeAgo(time) {
  const toDay = new Date();
  const targetDate = new Date(time);

  const diff = toDay - targetDate;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return "1 minute ago";
  } else if (minutes <= 59) {
    return `${minutes} minutes ago`;
  } else if (hours <= 1) {
    return "1 hour ago";
  } else if (hours <= 23) {
    return `${hours} hours ago`;
  } else if (days <= 1) {
    return "1 day ago";
  } else if (days <= 30) {
    return `${days} days ago`;
  } else if (months <= 1) {
    return "1 month ago";
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (years <= 1) {
    return "1 year ago";
  } else {
    return `${years} years ago`;
  }
}

export function formatDate(value) {
  const date = new Date(value);
  return date.toLocaleString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\./g, '. ');
}