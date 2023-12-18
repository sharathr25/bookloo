class User {
  id: string;
  name: string;
  email: string;
  role: Role;
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
    this.email = email;
    this.name = name;
    this.pic = pic;
    this.role = role;
  }
}
