import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
}

interface InstagramFeedProps {
  accessToken?: string;
  limit?: number;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ 
  accessToken, 
  limit = 8 
}) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      if (!accessToken) {
        // If no access token, show placeholder posts
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url&access_token=${accessToken}&limit=${limit}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Unable to load Instagram posts');
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken, limit]);

  // Placeholder posts when no access token is provided
  const placeholderPosts = [
    {
      id: '1',
      media_url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
    {
      id: '2',
      media_url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
    {
      id: '3',
      media_url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
    {
      id: '4',
      media_url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
    {
      id: '5',
      media_url: 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
    {
      id: '6',
      media_url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
    {
      id: '7',
      media_url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
    {
      id: '8',
      media_url: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/plant_saver_and_accounting/',
    },
  ];

  const displayPosts = posts.length > 0 ? posts : placeholderPosts;

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[...Array(limit)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">{error}</p>
        <a
          href="https://www.instagram.com/plant_saver_and_accounting/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-accent-gold hover:text-accent-lightGold underline"
        >
          Visit our Instagram profile
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {displayPosts.slice(0, limit).map((post, index) => (
        <motion.a
          key={post.id}
          href={post.permalink || 'https://www.instagram.com/plant_saver_and_accounting/'}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
        >
          <img
            src={post.thumbnail_url || post.media_url}
            alt={post.caption?.substring(0, 100) || 'Instagram post'}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart size={16} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={16} />
                  </div>
                </div>
                <ExternalLink size={16} />
              </div>
              {post.caption && (
                <p className="text-white text-xs mt-2 line-clamp-2">
                  {post.caption}
                </p>
              )}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default InstagramFeed;

