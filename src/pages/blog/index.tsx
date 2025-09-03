import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getPublishedPostsServer } from '@/lib/blog.server';
import { format } from 'date-fns';
import Layout from '@/components/layout/Layout';
import { Poppins } from "next/font/google";

interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  tags: Array<{
    id: string;
    name: string;
    color: string;
  }>;
  slug: string;
}

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Props {
  posts: BlogPost[];
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Layout
      title="Blog | DSeT Consulting"
      description="Explore our insights on AI, digital transformation, and business innovation."
    >
      <div className={`${poppins.variable} font-sans`}>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container-custom">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Our Latest Insights
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed px-2 sm:px-0">
              Discover the latest trends and strategies in AI, digital transformation, and business innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts or Coming Soon */}
      <div className="bg-gray-900 py-12 sm:py-16">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <Image
                        src={post.imageUrl.startsWith('http') ? post.imageUrl : post.imageUrl.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {post.tags && post.tags.length > 0 && (
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex gap-2 flex-wrap">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag.id}
                              className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-colors"
                              style={{ color: tag.color }}
                            >
                              {tag.name}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-600">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#1e90ff] transition-colors leading-tight">
                        {post.title}
                      </h2>
                      {post.subtitle && (
                        <p className="text-gray-300 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base leading-relaxed">
                          {post.subtitle}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                        <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                        <span className="text-[#1e90ff] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Read more 
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
              <div className="bg-gray-800 rounded-2xl shadow-sm p-6 sm:p-8 md:p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-[#5e17ea]/10 to-[#1e90ff]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#1e90ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  Blog Posts Coming Soon
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  We're currently working on creating insightful content about AI, digital transformation, 
                  and business innovation. Check back soon for our latest articles and insights.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-medium rounded-lg hover:from-[#4912c7] hover:to-[#1a7fdf] transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPublishedPostsServer();
    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every minute
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    };
  }
};

export default Blog;