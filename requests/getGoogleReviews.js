export async function getGoogleReviews() {
  const url = 'https://mybusiness.googleapis.com/v4/accounts/1028444224706510043/locations/ChIJT4-XoRdWwokR_STT5apGtEc/reviews';

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data) {
      console.error(`Failed to fetch reviews for place ${data.status}`);
      return [];
    }

    const reviews = data.result || [];
    return reviews;
  } catch (e) {
    console.error(`Error fetching reviews for place ${e.message}`);
    return [];
  }
}
