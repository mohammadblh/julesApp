import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface PostCardProps {
  post: {
    id: string;
    username: string;
    avatar: string;
    imageUrl: string;
    caption: string;
    likes: number;
    comments: number;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <View className="mb-4">
      <View className="flex-row items-center p-2">
        <Image
          source={{ uri: post.avatar }}
          className="w-8 h-8 rounded-full"
        />
        <Text className="font-bold ml-2">{post.username}</Text>
      </View>
      <Image source={{ uri: post.imageUrl }} className="w-full h-96" />
      <View className="p-2">
        <View className="flex-row items-center">
          <FontAwesome name="heart-o" size={24} className="mr-4" />
          <FontAwesome name="comment-o" size={24} className="mr-4" />
          <FontAwesome name="paper-plane-o" size={24} />
        </View>
        <Text className="font-bold mt-2">{post.likes} likes</Text>
        <Text>
          <Text className="font-bold">{post.username}</Text> {post.caption}
        </Text>
      </View>
    </View>
  );
};

export default PostCard;
