class ReviewedUser {
  id: string;
  name: string;
  profilePicUrl?: string;
  email: string;

  constructor({
    id,
    name,
    profilePicUrl,
    email,
  }: {
    id: string;
    name: string;
    email: string;
    profilePicUrl?: string;
  }) {
    this.id = id;
    this.name = name;
    this.profilePicUrl = profilePicUrl;
    this.email = email;
  }
}
