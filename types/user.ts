export interface User {
  id: string;
  email: string;
  name: string | null;
  password: string;
  resetToken: string | null;
  resetTokenExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
