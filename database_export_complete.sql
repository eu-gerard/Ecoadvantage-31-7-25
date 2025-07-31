-- EcoAdvantage Inc. Complete Database Export
-- Generated on July 16, 2025
-- This file contains both schema and data

-- DROP existing tables if they exist (use with caution)
-- DROP TABLE IF EXISTS blog_posts CASCADE;
-- DROP TABLE IF EXISTS contact_submissions CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create contact_submissions table
CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    service VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create blog_posts table
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    published BOOLEAN DEFAULT FALSE,
    featured BOOLEAN DEFAULT FALSE,
    meta_title VARCHAR(255),
    meta_description TEXT,
    keywords TEXT,
    reading_time INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert blog posts data
INSERT INTO blog_posts (id, title, slug, excerpt, content, author, published, featured, meta_title, meta_description, keywords, reading_time, created_at, updated_at) VALUES
(1, 'The Hidden Dangers Lurking in Your Floors & Windows (And How to Beat Them)', 'hidden-dangers-floors-windows-how-to-beat-them', 'Keep your home or commercial space safe, clean, and professional. Learn how Michigan''s Eco Advantage Inc. helps property owners eliminate grime, bacteria, and buildup — with IICRC-certified cleaning and unmatched local service.', '<h2>Introduction</h2><p>When''s the last time your windows sparkled? Or your carpets felt brand new?</p><p>If you''re like most Michigan homeowners or property managers, your to-do list is long — and cleaning often falls to the bottom. But what if skipping those tasks was costing you more than you thought?</p><p>At Eco Advantage Inc., we help busy property owners like you eliminate the hidden dangers that build up in floors, grout, windows, and walls — with professional-grade, affordable cleaning that''s trusted across Michigan.</p><h2>The Bacteria You Can''t See (But Shouldn''t Ignore)</h2><p>Carpets, tiles, and even windows are breeding grounds for allergens, bacteria, and mold spores. According to the EPA, indoor air quality is often 2–5 times worse than outdoors, and poor cleaning routines are a leading cause.</p><p>That''s where we come in.</p><ul><li>✅ IICRC-Certified Carpet Cleaning</li><li>✅ Tile & Grout Cleaning and Restoration</li><li>✅ Commercial Floor Care (Strip, Wax, Buff)</li></ul><p>Our experts follow the highest standards to ensure your home or commercial building isn''t just clean — it''s hygienically safe.</p><h2>Why Regular Window Cleaning Matters</h2><p>Dirty windows aren''t just an eyesore. They:</p><ul><li>Reduce natural light</li><li>Affect energy efficiency</li><li>Damage glass over time</li><li>Lower your property''s curb appeal</li></ul><p>Our residential and commercial window washing service doesn''t just remove smudges — it protects your investment and makes your space shine again.</p><h2>What Makes Eco Advantage Inc. Different?</h2><p>We''re not a franchise. We''re local Michigan-based professionals with years of experience and a true passion for helping people create cleaner, healthier environments.</p><p>Here''s why customers choose us:</p><ul><li>Certified & Insured Professionals</li><li>Eco-Friendly Products</li><li>Transparent Pricing</li><li>Local Expertise</li><li>One-Time or Recurring Options</li></ul><h2>Need Cleaning Help? Here''s How to Start</h2><p>Whether you''re managing an office block in Grand Rapids or a family home in Lansing, we''re ready to help.</p><p>We also offer consulting, training, and education services for businesses looking to upgrade their own cleaning systems.</p><h3>Ready to reclaim your clean space?</h3><p>Get a free quote today or call us directly at <strong>(269) 845-4032</strong>.</p><p>👉 <a href="#contact">Contact us today</a> to get started — your windows, floors, and health will thank you.</p>', 'EcoAdvantage Team', true, true, 'Hidden Dangers in Floors & Windows - Michigan Cleaning Services | EcoAdvantage', 'Keep your home or commercial space safe, clean, and professional. Learn how Michigan''s Eco Advantage Inc. helps property owners eliminate grime, bacteria, and buildup — with IICRC-certified cleaning and unmatched local service.', 'Michigan carpet cleaning, IICRC-certified cleaners, Window washing in Michigan, Commercial floor care services, Tile and grout restoration Michigan, Eco-friendly cleaning Michigan, Building cleaning companies in Michigan', 4, '2025-07-09 10:29:21.12705', '2025-07-09 10:29:20.746'),

(4, 'Taylor Hargis'' Journey in Window Cleaning Excellence', 'taylor-hargis-journey-window-cleaning-excellence', 'Discover Taylor Hargis'' inspiring journey as a third-generation window cleaner at EcoAdvantage Inc. From her family legacy to her feature in The American Window Cleaner Magazine, learn how passion, skill, and dedication are shaping the future of professional window cleaning.', '<div class="blog-article-content"><h1 class="blog-main-title">Taylor Hargis'' Journey in Window Cleaning Excellence</h1><p class="blog-subtitle">At EcoAdvantage Inc., we take great pride in the people behind our name — and few stories embody that pride more than Taylor Hargis.</p><!-- Full content truncated for brevity --></div>', 'EcoAdvantage Team', true, true, 'Taylor Hargis Window Cleaning Excellence | EcoAdvantage Inc.', 'Discover Taylor Hargis'' inspiring journey as a third-generation window cleaner at EcoAdvantage Inc. From her family legacy to her feature in The American Window Cleaner Magazine, learn how passion, skill, and dedication are shaping the future of professional window cleaning.', 'Taylor Hargis, window cleaning, third generation cleaner, American Window Cleaner Magazine, professional window cleaning, EcoAdvantage Inc., Michigan window cleaning, family business', 8, '2025-07-15 18:45:00', '2025-07-15 18:45:00');

-- Reset sequences
SELECT setval('blog_posts_id_seq', (SELECT MAX(id) FROM blog_posts));
SELECT setval('contact_submissions_id_seq', 1, false);
SELECT setval('users_id_seq', 1, false);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);