import ReactMarkdown from 'react-markdown';
import { getBlogPost } from '@/lib/actions'; // Ensure you have these functions
import { BlogNavbar } from '@/src/components/ui/BlogNavbar';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import BlogPageActions from '@/src/components/BlogPageActions';
import { Vortex } from "@/src/components/ui/vortex";

async function BlogPage({ params }: { params: { id: string } }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  const fetchBlogData = async (id: string) => {
    try {
      return await getBlogPost(id);

    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const blog = await fetchBlogData(params.id);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <BlogNavbar userData={user}></BlogNavbar>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={1000}
        className="flex flex-col"
      >
        <div className="max-w-4xl mx-auto p-8 bg-gray-950 text-white rounded-lg shadow-md mt-4">
          <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
          <div className="mb-4">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-xl font-semibold my-2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-lg font-medium my-1" {...props} />,
                p: ({ node, ...props }) => <p className="text-base my-2" {...props} />,
                code: ({ node, ...props }) => (
                  <pre className="bg-gray-700 p-2 rounded-md my-2" {...props} />
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag.tag.id}
                className="bg-gray-700 text-sm text-gray-300 px-3 py-1 rounded-full mr-2 mb-2"
              >
                {tag.tag.name}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <BlogPageActions blogId={blog.id} blogLikes={blog.likes}></BlogPageActions>
          </div>
        </div>
      </Vortex>
    </>
  );
}

export default BlogPage;