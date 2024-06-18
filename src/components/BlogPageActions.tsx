'use client';
import { likeBlogPost } from '@/lib/actions';
import { Button } from '@nextui-org/react';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

function BlogPageActions({ blogId, blogLikes }: { blogId: string, blogLikes: number }) {
    const handleLike = async () => {
        try {
            await likeBlogPost(blogId);
        } catch (error) {
            console.error('Error liking blog post:', error);
        }
    };
    return (
        <>
            <div className="flex justify-end items-center w-full space-x-2">
                <Button
                    isIconOnly
                    onClick={handleLike}
                    color={'danger'}
                >
                    <FaHeart />
                </Button>
                <span className='text-xs text-gray-500'>{blogLikes} {blogLikes === 1 ? 'Like' : 'Likes'}</span>
            </div>
        </>
    )
}

export default BlogPageActions