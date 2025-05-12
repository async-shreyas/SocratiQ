import { PrismaClient } from '@/app/generated/prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create a singleton instance of PrismaClient
const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Attach to global object in development to prevent multiple instances
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;