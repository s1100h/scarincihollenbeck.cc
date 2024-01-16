export async function getGoogleReviewsForPalace(placeId) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=reviews&place_id=${placeId}&fields=address_components&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data) {
      console.error(`Failed to fetch reviews for place ${data.status}`);
      return [];
    }

    const reviews = data.result.reviews || [];
    return reviews;
  } catch (error) {
    console.error(
      `Error fetching reviews for place ${placeId}: ${error.message}`,
    );
    return [];
  }
}

export async function getGoogleReviewsForPalaces(placesIds) {
  try {
    const reviewsPromises = placesIds.map(async (placeId) => getGoogleReviewsForPalace(placeId));

    const reviewsData = await Promise.all(reviewsPromises);
    return reviewsData;
  } catch (error) {
    console.error(`Error fetching reviews for places: ${error.message}`);
    return [];
  }
}
