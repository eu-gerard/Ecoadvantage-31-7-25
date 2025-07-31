# EcoAdvantage Website - Hostinger Deployment Guide

## Database Setup (Complete First)

### Step 1: Import Database Schema
1. Log into your Hostinger control panel
2. Go to **MySQL Databases** section
3. Click on **phpMyAdmin** for your database: `u925091178_eco_backend`
4. In phpMyAdmin, click on your database name in the left sidebar
5. Click the **Import** tab
6. Choose file: Upload `mysql_database_schema.sql` first
7. Click **Go** to create all tables

### Step 2: Import Database Data
1. Still in phpMyAdmin, click **Import** tab again
2. Choose file: Upload `mysql_database_data.sql` 
3. Click **Go** to import all blog posts and sample data

## Environment Variables Setup

Add these environment variables in your Hostinger hosting setup:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=u925091178_eco_backend
DB_USER=u925091178_eco_backend
DB_PASSWORD=[your-database-password]
NODE_ENV=production
```

## File Upload Instructions

### Option 1: Direct Upload (Recommended)
1. Compress your project files (excluding node_modules)
2. Upload via Hostinger File Manager
3. Extract files to your domain's public_html folder

### Option 2: Git Deployment
1. Push your code to GitHub/GitLab
2. Use Hostinger's Git deployment feature
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`

## Build Commands

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

## Verification Steps

1. Visit your domain to check the website loads
2. Test contact form submission
3. Verify blog posts display correctly
4. Check all navigation links work
5. Test phone buttons and contact information

## Database Content Included

- **Blog Posts**: 2 published articles with SEO optimization
- **Contact Form**: Ready to receive submissions
- **Database Structure**: Complete MySQL schema for all features

Your website is now fully configured with:
✅ MySQL database integration  
✅ Contact form functionality  
✅ Blog system with SEO content  
✅ Mobile-responsive design  
✅ AI chat support (Voiceflow)  
✅ Smooth scroll animations  
✅ Professional team profiles