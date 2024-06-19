import MarkdownEditor from '@/src/components/MarkdownEditor'; 
import { BlogNavbar } from '@/src/components/ui/BlogNavbar';
import { Suspense } from "react"

function BlogEditor() {
  return (
    <div className='h-screen flex flex-col'>
      <BlogNavbar userData={null}></BlogNavbar>
      <Suspense><MarkdownEditor></MarkdownEditor></Suspense>
    </div>
  )
}

export default BlogEditor