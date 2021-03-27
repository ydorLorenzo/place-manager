interface Role {
  id: number;
  name: string;
}

export interface User {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  isVerified: true,
  createdAt: Date,
  updatedAt: Date,
  roles: Role[]
}
