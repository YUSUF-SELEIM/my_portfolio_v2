import React from 'react'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { BlogNavbar } from '@/src/components/ui/BlogNavbar';

async function Blog() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login")
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <>
      <BlogNavbar userData={user}></BlogNavbar>
      <div className="h-[90vh] w-full bg-black flex flex-col overflow-hidden rounded-md " id="me">
        <div className='text-2xl mx-44 mt-12'>Recent Blogs</div>
      </div>
    </>
  )
}

export default Blog