const dateCalculator = (postTime) => {
  const date = new Date(postTime);
  const options = {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}
export default dateCalculator