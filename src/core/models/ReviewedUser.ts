class ReviewedUser {
  id: string;
  name: string;
  pic: string;

  constructor({
    id,
    name,
    email,
    role,
    pic,
  }: {
    id: string;
    name: string;
    email: string;
    role: Role;
    pic: string;
  }) {
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
