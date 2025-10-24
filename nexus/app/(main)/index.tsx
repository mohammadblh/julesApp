import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import PostCard from '@/components/PostCard';

const mockPosts = [
  {
    id: '1',
    username: 'jules',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    imageUrl: 'https://picsum.photos/seed/picsum/400/600',
    caption: 'This is a beautiful landscape!',
    likes: 123,
    comments: 12,
  },
  {
    id: '2',
    username: 'jane_doe',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    imageUrl: 'https://picsum.photos/seed/picsum2/400/600',
    caption: 'Exploring the city.',
    likes: 245,
    comments: 23,
  },
  {
    id: '3',
    username: 'john_smith',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    imageUrl: 'https://picsum.photos/seed/picsum3/400/600',
    caption: 'A delicious meal.',
    likes: 312,
    comments: 34,
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={mockPosts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
