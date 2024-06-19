'use client';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Input, Switch } from "@nextui-org/react";
import { useRouter, useSearchParams } from 'next/navigation'
import { createBlogPostWithTags ,updateBlogPostWithTags, getBlogPost } from '@/lib/actions';

function MarkdownEditor() {
  const [md, setMd] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isPublic, setIsPublic] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams()
  const id = searchParams.get('id');

  useEffect(() => {
    const fetchBlogData = async (blogId: string) => {
      try {
        const blog = await getBlogPost(blogId);
        if (blog) {
          setMd(blog.content);
          setTags(blog.tags.map((tag: { tag: { name: string } }) => tag.tag.name));
          setIsPublic(blog.isPublic);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    if (id) {
      fetchBlogData(id);
    }
  }, [id]);

  const createBlog = async () => {
    try {
      if (id) {
        await updateBlogPostWithTags(id, md, tags, isPublic);
        console.log("Created blog post");
      } else {
        await createBlogPostWithTags(md, tags, isPublic);
        console.log("Updated blog post");
      }
      router.push('/blog');
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  }
  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };


  return (
    <div className='flex flex-col w-full h-full p-4 '>
      <div className="flex w-full h-full mb-4">
        <textarea
          className="w-1/2 font-mono overflow-auto whitespace-pre border-solid h-full p-4 border-r resize-none outline-none text-white"
          onChange={(e) => setMd(e.target.value)}
          value={md}
          placeholder="Type your markdown here..."
        />
        <div className="w-1/2 h-full p-4 overflow-auto text-white">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-8" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold my-4" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-2xl font-medium my-2" {...props} />,
              p: ({ node, ...props }) => <p className="text-base" {...props} />,
              code: ({ node, ...props }) => (
                <div className="flex justify-center my-4">
                  <pre className="text-base bg-gray-900 p-4 rounded-md w-fit overflow-x-auto" {...props} />
                </div>
              ),
              a: ({ node, ...props }) => (
                <a className="text-blue-500 hover:underline" {...props} />
              ),
            }}
          >
            {md}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex space-x-4">
            <Input
              type="text"
              variant="bordered"
              placeholder="Add a tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <Button
              color='primary'
              onClick={handleAddTag}
            >
              Add Tag
            </Button>
          </div>
          <div>
            <Switch isSelected={isPublic} onValueChange={setIsPublic}>
              <p className="text-small text-default-500">{isPublic ? "Public" : "Private"}</p>
            </Switch>

          </div>
          <div>
            <Button color='success' size='lg' onClick={createBlog}>
              Publish
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full m-1">
              {tag}
              <button
                className="ml-2 text-gray-300 hover:text-gray-100"
                onClick={() => handleRemoveTag(tag)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
