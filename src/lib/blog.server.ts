import fs from 'fs/promises';
import path from 'path';
import { BlogPost } from './blog';

const postsFile = path.join(process.cwd(), 'src/data/posts.json');

export async function getAllPostsServer(): Promise<BlogPost[]> {
  try {
    const content = await fs.readFile(postsFile, 'utf-8');
    return JSON.parse(content).posts;
  } catch (error) {
    // If file doesn't exist, create it with empty posts array
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.writeFile(postsFile, JSON.stringify({ posts: [] }));
      return [];
    }
    throw error;
  }
}

export async function getPublishedPostsServer(): Promise<BlogPost[]> {
  const posts = await getAllPostsServer();
  return posts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlugServer(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPostsServer();
  return posts.find(post => post.slug === slug) || null;
}

export async function createPostServer(post: Omit<BlogPost, 'id'>): Promise<BlogPost> {
  const posts = await getAllPostsServer();
  const newPost = {
    ...post,
    id: Date.now().toString(),
  };
  
  posts.push(newPost);
  await fs.writeFile(postsFile, JSON.stringify({ posts }, null, 2));
  return newPost;
}

export async function updatePostServer(id: string, postUpdate: Partial<BlogPost>): Promise<BlogPost | null> {
  const posts = await getAllPostsServer();
  const index = posts.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  
  posts[index] = { ...posts[index], ...postUpdate };
  await fs.writeFile(postsFile, JSON.stringify({ posts }, null, 2));
  
  return posts[index];
}

export async function deletePostServer(id: string): Promise<boolean> {
  const posts = await getAllPostsServer();
  const filteredPosts = posts.filter(p => p.id !== id);
  
  if (filteredPosts.length === posts.length) return false;
  
  await fs.writeFile(postsFile, JSON.stringify({ posts: filteredPosts }, null, 2));
  return true;
}