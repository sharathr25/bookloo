class ReviewedUser {
  id: string;
  name: string;
  pic: string;
  email: string;

  constructor({
    id,
    name,
    pic,
    email,
  }: {
    id: string;
    name: string;
    email: string;
    pic: string;
  }) {
    this.id = id;
    this.name = name;
    this.pic = pic;
    this.email = email;
  }
}
