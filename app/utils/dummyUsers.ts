// app/utils/dummyUsers.ts
export interface User {
  email: string;
  password: string;
  fullName: string;
}

export const DUMMY_USERS: User[] = [
  {
    email: "dahlia@triplef.com",
    password: "dahlia",
    fullName: "John Doe",
  },
  {
    email: "admin@example.com",
    password: "admin123",
    fullName: "Admin User",
  },
];

export function findUser(email: string, password: string): User | undefined {
  return DUMMY_USERS.find((u) => u.email === email && u.password === password);
}

export function isEmailRegistered(email: string): boolean {
  return DUMMY_USERS.some((u) => u.email === email);
}

export function registerUser(user: Omit<User, "id">): void {
  DUMMY_USERS.push(user);
}
