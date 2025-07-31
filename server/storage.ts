import { users, contactSubmissions, blogPosts, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Blog methods
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(publishedOnly?: boolean): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: number): Promise<void>;
  getFeaturedBlogPosts(limit?: number): Promise<BlogPost[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values({
        ...insertSubmission,
        // Ensure a blank message is stored as an empty string rather than null
        // because the column is defined as NOT NULL in the schema.
        message: insertSubmission.message || "",
      })
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(50); // Limit for performance
    return submissions;
  }

  // Blog methods
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db
      .insert(blogPosts)
      .values({
        ...insertPost,
        updatedAt: new Date(),
      })
      .returning();
    return post;
  }

  async getBlogPosts(publishedOnly: boolean = false): Promise<BlogPost[]> {
    const query = db.select().from(blogPosts);
    
    if (publishedOnly) {
      return await query.where(eq(blogPosts.published, true)).orderBy(desc(blogPosts.createdAt)).limit(20);
    }
    
    return await query.orderBy(desc(blogPosts.createdAt)).limit(20);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || undefined;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async updateBlogPost(id: number, updatePost: Partial<InsertBlogPost>): Promise<BlogPost> {
    const [post] = await db
      .update(blogPosts)
      .set({
        ...updatePost,
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  async deleteBlogPost(id: number): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
    return await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.featured, true))
      .limit(limit)
      .orderBy(desc(blogPosts.createdAt));
  }
}

// In-memory storage for development fallback
export class MemStorage implements IStorage {
  private users: User[] = [];
  private contactSubmissions: ContactSubmission[] = [];
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Hidden Dangers Lurking in Your Floors & Windows",
      slug: "hidden-dangers-floors-windows",
      excerpt: "Discover the unseen threats in your commercial space that could be costing you customers and compromising health.",
      content: "Every day, your commercial space faces invisible threats that most business owners never consider...",
      author: "EcoAdvantage Team",
      published: true,
      featured: true,
      metaTitle: "Hidden Dangers in Commercial Floors & Windows | EcoAdvantage",
      metaDescription: "Learn about the hidden dangers in your commercial floors and windows that could be affecting your business.",
      keywords: "commercial cleaning, floor safety, window cleaning, business maintenance",
      readingTime: 8,
      createdAt: new Date('2025-01-10'),
      updatedAt: new Date('2025-01-10')
    },
    {
      id: 2,
      title: "Taylor Hargis' Journey in Window Cleaning Excellence",
      slug: "taylor-hargis-window-cleaning-excellence",
      excerpt: "Meet our lead technician Taylor Hargis and discover his award-winning approach to commercial window cleaning.",
      content: "Taylor Hargis has become a recognized name in the commercial window cleaning industry...",
      author: "EcoAdvantage Team",
      published: true,
      featured: false,
      metaTitle: "Taylor Hargis - Window Cleaning Expert | EcoAdvantage",
      metaDescription: "Learn about Taylor Hargis, our award-winning window cleaning specialist and his journey to excellence.",
      keywords: "Taylor Hargis, window cleaning expert, commercial windows, professional cleaning",
      readingTime: 6,
      createdAt: new Date('2025-01-08'),
      updatedAt: new Date('2025-01-08')
    }
  ];
  private nextUserId = 1;
  private nextContactId = 1;
  private nextBlogId = 3;

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  async createUser(user: InsertUser): Promise<User> {
    const newUser: User = {
      id: this.nextUserId++,
      ...user
    };
    this.users.push(newUser);
    return newUser;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const newSubmission: ContactSubmission = {
      id: this.nextContactId++,
      ...submission,
      message: submission.message || "",
      createdAt: new Date()
    };
    this.contactSubmissions.push(newSubmission);
    return newSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.contactSubmissions].reverse();
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const newPost: BlogPost = {
      id: this.nextBlogId++,
      ...post,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.push(newPost);
    return newPost;
  }

  async getBlogPosts(publishedOnly?: boolean): Promise<BlogPost[]> {
    let posts = [...this.blogPosts];
    if (publishedOnly) {
      posts = posts.filter(p => p.published);
    }
    return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.find(p => p.id === id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return this.blogPosts.find(p => p.slug === slug);
  }

  async updateBlogPost(id: number, updatePost: Partial<InsertBlogPost>): Promise<BlogPost> {
    const index = this.blogPosts.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Blog post not found');
    
    this.blogPosts[index] = {
      ...this.blogPosts[index],
      ...updatePost,
      updatedAt: new Date()
    };
    return this.blogPosts[index];
  }

  async deleteBlogPost(id: number): Promise<void> {
    const index = this.blogPosts.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Blog post not found');
    this.blogPosts.splice(index, 1);
  }

  async getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
    return this.blogPosts
      .filter(p => p.featured)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}

// Use DatabaseStorage if db is available, otherwise fallback to MemStorage
export const storage = db ? new DatabaseStorage() : new MemStorage();
