import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

// Fallback reviews in case API fetch fails
const fallbackReviews = [
  {
    id: '1',
    author: 'Nicole P.',
    date: '2 weeks ago',
    rating: 5,
    text: 'Outstanding service from start to finish. Dr. Connor and the hygienist provided exceptional care. The office is modern, clean, and the staff made me feel completely at ease.'
  },
  {
    id: '2',
    author: 'Susan Y.',
    date: '1 month ago',
    rating: 5,
    text: 'My family has been coming to Cross Creeks Dental for years. Dr. Quellhorst is thorough, gentle, and always takes time to explain everything. Highly recommend!'
  },
  {
    id: '3',
    author: 'Michael T.',
    date: '1 month ago',
    rating: 5,
    text: 'Best dental experience I\'ve had. The entire team is friendly and professional. They really care about their patients and it shows.'
  },
  {
    id: '4',
    author: 'Jennifer K.',
    date: '2 months ago',
    rating: 5,
    text: 'Amazing dental practice! Clean facility, friendly staff, and excellent care. They make dental visits stress-free.'
  }
];

async function fetchGoogleReviews() {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    console.log('⚠️  Google Places API credentials not found in environment variables');
    console.log('   Using fallback reviews data');
    return {
      reviews: fallbackReviews,
      totalReviews: 750,
      averageRating: 5.0
    };
  }

  try {
    console.log('🔍 Fetching reviews from Google Places API...');

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    if (!data.result || !data.result.reviews) {
      throw new Error('No reviews found in API response');
    }

    // Transform Google reviews to our format and filter for 5-star reviews only
    const allReviews = data.result.reviews
      .filter(review => review.rating === 5)  // Only 5-star reviews
      .slice(0, 10)
      .map((review, index) => ({
        id: String(index + 1),
        author: review.author_name,
        date: review.relative_time_description,
        rating: review.rating,
        text: review.text
      }));

    console.log(`✅ Successfully fetched ${allReviews.length} five-star reviews`);
    console.log(`⭐ Average rating: ${data.result.rating} (${data.result.user_ratings_total} total reviews)`);

    // Return both reviews and metadata
    return {
      reviews: allReviews,
      totalReviews: data.result.user_ratings_total,
      averageRating: data.result.rating
    };

  } catch (error) {
    console.error('❌ Error fetching reviews:', error.message);
    console.log('   Using fallback reviews data');
    return {
      reviews: fallbackReviews,
      totalReviews: 750,
      averageRating: 5.0
    };
  }
}

async function main() {
  console.log('🚀 Starting review fetch process...\n');

  const data = await fetchGoogleReviews();

  // Ensure data directory exists
  const dataDir = join(__dirname, '../src/data');
  mkdirSync(dataDir, { recursive: true });

  // Write reviews to file
  const reviewsPath = join(dataDir, 'reviews.json');
  writeFileSync(reviewsPath, JSON.stringify(data.reviews, null, 2), 'utf-8');

  // Write metadata to separate file
  const metadataPath = join(dataDir, 'reviews-metadata.json');
  writeFileSync(metadataPath, JSON.stringify({
    totalReviews: data.totalReviews,
    averageRating: data.averageRating,
    lastUpdated: new Date().toISOString()
  }, null, 2), 'utf-8');

  console.log(`\n📝 Reviews saved to: ${reviewsPath}`);
  console.log(`📊 Metadata saved to: ${metadataPath}`);
  console.log('✨ Review fetch complete!\n');
}

main().catch(console.error);
