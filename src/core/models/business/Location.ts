class Location {
  latitude: number;
  longitude: number;

  constructor({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
