type BusinessType = {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  rating: number;
  numberOfRatings: number;
  media: [Media];
  features: [Feature];
};

class Business {
  id: string;
  name: string;
  description: string;
  rating: number;
  numberOfRatings: number;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  media: [Media];
  features: [Feature];

  constructor({
    id,
    name,
    description,
    address,
    city,
    state,
    country,
    pincode,
    location,
    rating,
    numberOfRatings,
    media,
    features,
  }: BusinessType) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.city = city;
    this.pincode = pincode;
    this.location = location;
    this.rating = rating;
    this.state = state;
    this.country = country;
    this.media = media;
    this.numberOfRatings = numberOfRatings;
    this.features = features;
  }
}
