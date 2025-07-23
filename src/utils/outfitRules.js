export function getOutfitRecommendation(temp, condition) {
  if (condition.toLowerCase().includes('rain')) return 'Take an umbrella and wear waterproof shoes';
  if (temp < 10) return 'Wear a warm coat, gloves, and a scarf';
  if (temp >= 10 && temp < 20) return 'Wear a jacket or hoodie';
  if (temp >= 20 && temp < 30) return 'Light shirt and jeans suggested';
  if (temp >= 30) return 'T-shirt, shorts, sunglasses, and sunscreen';
  return 'Dress comfortably';
}