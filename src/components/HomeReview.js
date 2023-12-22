// Example usage in another component
import React from "react";
import Reviews from "./Reviews";

const HomeReview = () => {
  const reviewsData = [
    {
      name: "Janet",
      rating: 4,
      comment:
        "I recently had the pleasure of using Endurance Healthcare Services, and I must say it was an excellent experience. The team at Endurance provided top-notch service, exceeding my expectations. The caregivers were not only professional but also compassionate, creating a comfortable environment for me. The attention to detail in addressing my healthcare needs was remarkable. I would highly recommend Endurance Healthcare Services to anyone seeking quality and reliable healthcare at home.",
    },
    {
      name: "Adebayo Ojo",
      rating: 5,
      comment:
        "My experience with Endurance Healthcare Services has been nothing short of exceptional. From the moment I reached out to them, the staff exhibited a high level of professionalism and dedication. The caregivers provided outstanding support, and their commitment to ensuring my well-being was evident in every interaction. The personalized care I received made a significant positive impact on my overall health. I am truly grateful for the excellent service and would highly recommend Endurance Healthcare Services to others.",
    },
    {
      name: "Arron Smith",
      rating: 5,
      comment:
        "Endurance Healthcare Services is, without a doubt, a leader in providing compassionate and comprehensive healthcare services. The team's commitment to excellence is reflected in the exceptional care I received. The caregivers were not only skilled and knowledgeable but also showed genuine concern for my health and comfort. The level of professionalism demonstrated by the entire staff, from the leadership team to the caregivers, is commendable. I am immensely satisfied with the services provided by Endurance Healthcare Services and would highly recommend them to anyone in need of top-quality healthcare assistance.",
    },
    // Add more reviews as needed
  ];

  return (
    <div>
      {/* Other content on the screen */}
      <Reviews reviews={reviewsData} heading="Reviews" />
      {/* More content if needed */}
    </div>
  );
};

export default HomeReview;
