import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <h1>Post</h1>
      <Post 
        id={post.id || 'default-id'} 
        title={post.title || 'Default Title'} 
        content={post.content || 'Default Content'} 
        date={post.date || 'Default Date'} 
      />
    </>
  );
}