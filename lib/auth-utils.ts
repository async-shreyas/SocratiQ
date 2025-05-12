// lib/auth-utils.ts
import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

// Hash password with a random salt
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex');
  const buf = await scryptAsync(password, salt, 64) as Buffer;
  return `${buf.toString('hex')}.${salt}`;
}

// Verify password against stored hash
export async function verifyPassword(storedPassword: string, suppliedPassword: string): Promise<boolean> {
  const [hashedPassword, salt] = storedPassword.split('.');
  const buf = await scryptAsync(suppliedPassword, salt, 64) as Buffer;
  return buf.toString('hex') === hashedPassword;
}