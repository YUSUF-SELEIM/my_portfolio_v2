import { filterByTag, getTagName, getTags } from "@/lib/actions";
import { BlogNavbar } from '@/src/components/ui/BlogNavbar';
import ReactMarkdown from 'react-markdown';
import BlogPostActions from '@/src/components/BlogPostActions';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import TagsActions from '@/src/components/TagsActions';

async function TagPage({ params }: { params: { id: string } }) {
  const blogsByTag = await filterByTag(params.id);
  console.log(blogsByTag)
  const tags = await getTags();
  const tagName = await getTagName(params.id);

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  const truncateContent = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + " ...";
    }
    return content;
  };

  return (
    <>
      <BlogNavbar userData={user}></BlogNavbar>
      <div className="container mx-auto py-8 flex md:flex-row flex-col">
        <div className="flex-grow">
          <div className="text-2xl text-white mb-8 text-center md:text-left">{tagName} Blogs</div>
          <div className="w-full max-w-4xl flex flex-col space-y-8 md:px-0 px-6">
            {blogsByTag.map((blog, index) =>
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
                          <pre className="text-base bg-gray-900 p-4 rounded-md w-fit text-white overflow-x-auto" {...props} />
                        </div>
                      ),
                      a: ({ node, ...props }) => (
                        <a className="text-blue-500 hover:underline" {...props} />
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
        <TagsActions tags={tags} />
      </div>
    </>
  )
}

export default TagPage