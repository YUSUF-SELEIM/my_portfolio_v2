import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { BlogNavbar } from '@/src/components/ui/BlogNavbar';
import { getBlogPostsWithTags } from '@/lib/actions';
import ReactMarkdown from 'react-markdown';
import BlogPostActions from '@/src/components/BlogPostActions';
import { Vortex } from "@/src/components/ui/vortex";

async function Blog() {

  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login")
  // }

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  const getBlogs = async () => {
    try {
      return await getBlogPostsWithTags(); // Await the promise directly and return its result
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error; // Properly propagate the error for handling higher up
    }
  };

  const truncateContent = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + " ...";
    }
    return content;
  };

  const blogs = await getBlogs();
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
        <div className="mx-auto py-8">
          <div className="text-2xl text-white mb-8">Recent Blogs</div>
          <div className="w-full max-w-4xl flex flex-col space-y-8 md:px-0 px-6">
            {blogs.map((blog, index) =>
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-gray-950 p-4 rounded-lg shadow-lg">
                <div className="md:w-3/5 w-full mb-4 md:mb-0 overflow-x-auto">
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-4 text-white" {...props} />,
                      h2: ({ node, ...props }) => <h2 className="text-xl font-semibold my-2 text-white" {...props} />,
                      h3: ({ node, ...props }) => <h3 className="text-lg font-medium my-1 text-white" {...props} />,
                      p: ({ node, ...props }) => <p className="text-base text-white" {...props} />,
                      code: ({ node, ...props }) => (
                        <div className="flex justify-center my-4">
                          <pre className="text-base bg-gray-900 p-4 rounded-md w-fit text-white" {...props} />
                        </div>
                      ),
                    }}
                  >
                    {truncateContent(blog.content, 250)}
                  </ReactMarkdown>

                </div>
                <BlogPostActions blog={blog} userEmail={user?.email}></BlogPostActions>
              </div>
            )}
          </div>
        </div>
      </Vortex>
    </>
  )
}

export default Blog