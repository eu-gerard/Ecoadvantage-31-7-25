# Hostinger MySQL Setup Instructions

## Database Connection Info You'll Need:

After creating your MySQL database in Hostinger, you'll have:
- **Database Host**: Usually `localhost` or provided by Hostinger
- **Database Name**: The name you created (e.g., `ecoadvan_main`)
- **Username**: The username you created (e.g., `ecoadvan_user`) 
- **Password**: The password you set
- **Port**: Usually `3306` (MySQL default)

## Code Changes Required:

### 1. Update package.json dependencies
Replace PostgreSQL packages with MySQL:
```json
"@neondatabase/serverless" → "mysql2"
"drizzle-orm" (keep this, but change dialect)
```

### 2. Update drizzle.config.ts
Change from PostgreSQL to MySQL dialect

### 3. Update server/db.ts
Change connection from PostgreSQL to MySQL

### 4. Update shared/schema.ts
Change PostgreSQL-specific types to MySQL types

## Environment Variables for Hostinger:
```
DATABASE_URL=mysql://username:password@host:3306/database_name
```

Example:
```
DATABASE_URL=mysql://ecoadvan_user:yourpassword@localhost:3306/ecoadvan_main
```

## Files You Need to Upload to Hostinger:
1. All your website files (from the ZIP you downloaded)
2. Set the DATABASE_URL environment variable in Hostinger
3. Install Node.js dependencies on Hostinger

Would you like me to create the specific code changes for your files?