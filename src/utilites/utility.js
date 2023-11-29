export const averageReview = (allReviews) => {
  const count = allReviews.length;
  const totalRating = allReviews.reduce((total, review) => {
    return total + parseInt(review.rating);
  }, 0);
  if (!count) {
    return 0;
  }
  const average = totalRating / count;
  return average;
};
