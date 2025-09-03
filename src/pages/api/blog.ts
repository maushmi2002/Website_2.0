import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPostsServer, createPostServer, updatePostServer, deletePostServer, getPostBySlugServer } from '@/lib/blog.server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        if (req.query.slug) {
          const post = await getPostBySlugServer(req.query.slug as string);
          if (!post) {
            return res.status(404).json({ error: 'Post not found' });
          }
          return res.status(200).json(post);
        }
        const posts = await getAllPostsServer();
        return res.status(200).json(posts);

      case 'POST':
        const newPost = await createPostServer(req.body);
        return res.status(201).json(newPost);

      case 'PUT':
        const { id: updateId } = req.query;
        const updatedPost = await updatePostServer(updateId as string, req.body);
        if (!updatedPost) {
          return res.status(404).json({ error: 'Post not found' });
        }
        return res.status(200).json(updatedPost);

      case 'DELETE':
        const { id } = req.query;
        const success = await deletePostServer(id as string);
        return res.status(200).json({ success });

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Blog API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}