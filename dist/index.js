var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  blogPosts: () => blogPosts,
  contactSubmissions: () => contactSubmissions,
  insertBlogPostSchema: () => insertBlogPostSchema,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { mysqlTable, text, int, timestamp, boolean, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
var users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull()
});
var contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  service: varchar("service", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var blogPosts = mysqlTable("blog_posts", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  published: boolean("published").default(false).notNull(),
  featured: boolean("featured").default(false).notNull(),
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: text("meta_description"),
  keywords: text("keywords"),
  readingTime: int("reading_time").default(5).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  phone: true,
  email: true,
  service: true,
  message: true
});
var insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  author: true,
  published: true,
  featured: true,
  metaTitle: true,
  metaDescription: true,
  keywords: true,
  readingTime: true
});

// server/db.ts
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
var isDevelopment = process.env.NODE_ENV === "development";
var db;
if (isDevelopment && (!process.env.DB_HOST || !process.env.DB_NAME)) {
  console.log("Using development mode - MySQL connection will be configured for production");
  db = null;
} else {
  try {
    if (!process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD) {
      throw new Error(
        "Database environment variables must be set: DB_HOST, DB_NAME, DB_USER, DB_PASSWORD"
      );
    }
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "3306"),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });
    db = drizzle(connection, { schema: schema_exports, mode: "default" });
    console.log("Connected to MySQL database");
  } catch (error) {
    console.error("MySQL connection failed:", error);
    if (isDevelopment) {
      console.log("Falling back to development mode");
      db = null;
    } else {
      throw error;
    }
  }
}

// server/storage.ts
import { eq, desc } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async createContactSubmission(insertSubmission) {
    const [submission] = await db.insert(contactSubmissions).values({
      ...insertSubmission,
      message: insertSubmission.message || null
    }).returning();
    return submission;
  }
  async getContactSubmissions() {
    const submissions = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt)).limit(50);
    return submissions;
  }
  // Blog methods
  async createBlogPost(insertPost) {
    const [post] = await db.insert(blogPosts).values({
      ...insertPost,
      updatedAt: /* @__PURE__ */ new Date()
    }).returning();
    return post;
  }
  async getBlogPosts(publishedOnly = false) {
    const query = db.select().from(blogPosts);
    if (publishedOnly) {
      return await query.where(eq(blogPosts.published, true)).orderBy(desc(blogPosts.createdAt)).limit(20);
    }
    return await query.orderBy(desc(blogPosts.createdAt)).limit(20);
  }
  async getBlogPost(id) {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || void 0;
  }
  async getBlogPostBySlug(slug) {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || void 0;
  }
  async updateBlogPost(id, updatePost) {
    const [post] = await db.update(blogPosts).set({
      ...updatePost,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(blogPosts.id, id)).returning();
    return post;
  }
  async deleteBlogPost(id) {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }
  async getFeaturedBlogPosts(limit = 3) {
    return await db.select().from(blogPosts).where(eq(blogPosts.featured, true)).limit(limit).orderBy(desc(blogPosts.createdAt));
  }
};
var MemStorage = class {
  users = [];
  contactSubmissions = [];
  blogPosts = [
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
      createdAt: /* @__PURE__ */ new Date("2025-01-10"),
      updatedAt: /* @__PURE__ */ new Date("2025-01-10")
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
      createdAt: /* @__PURE__ */ new Date("2025-01-08"),
      updatedAt: /* @__PURE__ */ new Date("2025-01-08")
    }
  ];
  nextUserId = 1;
  nextContactId = 1;
  nextBlogId = 3;
  async getUser(id) {
    return this.users.find((u) => u.id === id);
  }
  async getUserByUsername(username) {
    return this.users.find((u) => u.username === username);
  }
  async createUser(user) {
    const newUser = {
      id: this.nextUserId++,
      ...user
    };
    this.users.push(newUser);
    return newUser;
  }
  async createContactSubmission(submission) {
    const newSubmission = {
      id: this.nextContactId++,
      ...submission,
      message: submission.message || "",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactSubmissions.push(newSubmission);
    return newSubmission;
  }
  async getContactSubmissions() {
    return [...this.contactSubmissions].reverse();
  }
  async createBlogPost(post) {
    const newPost = {
      id: this.nextBlogId++,
      ...post,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.blogPosts.push(newPost);
    return newPost;
  }
  async getBlogPosts(publishedOnly) {
    let posts = [...this.blogPosts];
    if (publishedOnly) {
      posts = posts.filter((p) => p.published);
    }
    return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async getBlogPost(id) {
    return this.blogPosts.find((p) => p.id === id);
  }
  async getBlogPostBySlug(slug) {
    return this.blogPosts.find((p) => p.slug === slug);
  }
  async updateBlogPost(id, updatePost) {
    const index = this.blogPosts.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Blog post not found");
    this.blogPosts[index] = {
      ...this.blogPosts[index],
      ...updatePost,
      updatedAt: /* @__PURE__ */ new Date()
    };
    return this.blogPosts[index];
  }
  async deleteBlogPost(id) {
    const index = this.blogPosts.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Blog post not found");
    this.blogPosts.splice(index, 1);
  }
  async getFeaturedBlogPosts(limit = 3) {
    return this.blogPosts.filter((p) => p.featured).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, limit);
  }
};
var storage = db ? new DatabaseStorage() : new MemStorage();

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/blog-posts", async (req, res) => {
    try {
      const publishedOnly = req.query.published === "true";
      const posts = await storage.getBlogPosts(publishedOnly);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });
  app2.get("/api/blog-posts/featured", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 3;
      const posts = await storage.getFeaturedBlogPosts(limit);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching featured blog posts:", error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });
  app2.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });
  app2.get("/api/blog-posts/slug/:slug", async (req, res) => {
    try {
      const slug = req.params.slug;
      const post = await storage.getBlogPostBySlug(slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });
  app2.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.json(post);
    } catch (error) {
      console.error("Error creating blog post:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Validation error",
          details: error.issues
        });
      } else {
        res.status(500).json({
          error: "Internal server error"
        });
      }
    }
  });
  app2.put("/api/blog-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(id, validatedData);
      res.json(post);
    } catch (error) {
      console.error("Error updating blog post:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Validation error",
          details: error.issues
        });
      } else {
        res.status(500).json({
          error: "Internal server error"
        });
      }
    }
  });
  app2.delete("/api/blog-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteBlogPost(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({
        error: "Internal server error"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/attached_assets", express2.static("attached_assets"));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
