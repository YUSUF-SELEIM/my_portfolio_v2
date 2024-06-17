import MarkdownEditor from '@/src/components/MarkdownEditor'; 
import { BlogNavbar } from '@/src/components/ui/BlogNavbar';

function BlogEditor() {
  return (
    <div className='h-screen flex flex-col'>
      <BlogNavbar userData={null}></BlogNavbar>
      <MarkdownEditor></MarkdownEditor>
    </div>
  )
}

export default BlogEditor