'use client';
import { Button, Chip } from '@nextui-org/react';
import { FaArrowAltCircleRight, FaEdit, FaTrash } from 'react-icons/fa';
import { deleteBlogPost } from '@/lib/actions';
import { useRouter } from 'next/navigation'

interface Blog {
  id: string;
  tags: { tag: { id: string; name: string } }[];
  likes: number;
}

function BlogPostController({ blog, userEmail }: { blog: Blog, userEmail: string | null | undefined }) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/blog/editor?id=${blog.id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteBlogPost(blog.id);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const goToBlogPage = () => {
    router.push(`/blog/${blog.id}`);
  };
  return (
    <div className="md:w-2/5 w-full flex flex-col mt-4 md:mt-0">
      <div className="flex flex-wrap justify-center md:justify-end">
        {blog.tags.map((tag: { tag: { id: string; name: string } }) => (
          <Chip key={tag.tag.id}>
            {tag.tag.name}
          </Chip>
        ))}
      </div>
      {userEmail === "yusufabdelfattah207@gmail.com" && (
        <div className="flex justify-center md:justify-end space-x-2 mt-4">
          <Button isIconOnly color="warning" onClick={handleEdit}>
            <FaEdit />
          </Button>
          <Button isIconOnly color="danger" onClick={handleDelete}>
            <FaTrash />
          </Button>
        </div>
      )}
      <div className="flex justify-end items-center mt-12 space-x-4">
        <span className="text-gray-400 text-xs">{blog.likes} Likes</span>
        <Button isIconOnly color="default" onClick={goToBlogPage}>
          <FaArrowAltCircleRight />
        </Button>
      </div>
    </div>
  );
}

export default BlogPostController;
