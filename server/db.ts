import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from "@shared/schema";

// Development fallback for when MySQL connection isn't available
const isDevelopment = process.env.NODE_ENV === 'development';

let db: any;

if (isDevelopment && (!process.env.DB_HOST || !process.env.DB_NAME)) {
  // Use in-memory storage for development when MySQL isn't available
  console.log('Using development mode - MySQL connection will be configured for production');
  db = null; // Storage layer will handle this
} else {
  try {
    // Check for required database environment variables
    if (!process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD) {
      throw new Error(
        "Database environment variables must be set: DB_HOST, DB_NAME, DB_USER, DB_PASSWORD",
      );
    }

    // Create MySQL connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    db = drizzle(connection, { schema, mode: 'default' });
    console.log('Connected to MySQL database');
  } catch (error) {
    console.error('MySQL connection failed:', error);
    if (isDevelopment) {
      console.log('Falling back to development mode');
      db = null;
    } else {
      throw error;
    }
  }
}

export { db };