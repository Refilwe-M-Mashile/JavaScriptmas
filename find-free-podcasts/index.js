import podcasts from "./data.js";
function getFreePodcasts(data) {
  return data
    .filter((podcast) => !podcast.paid)
    .map((p) => {
      return {
        title: p.title,
        rating: p.rating,
        paid: p.paid,
      };
    });
}

console.log(getFreePodcasts(podcasts));
