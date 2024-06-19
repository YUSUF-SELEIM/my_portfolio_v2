'use client';
import { likeBlogPost } from '@/lib/actions';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';

function BlogPageActions({ blogId, blogLikes }: { blogId: string, blogLikes: number }) {
    const [likes, setLikes] = useState(blogLikes);

    const handleLike = async () => {
        try {
            await likeBlogPost(blogId);
            setLikes(likes + 1);
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
                    className='hover:scale-110'
                >
                    <FaHeart className='hover:animate-pulse' />
                </Button>
                <span className='text-xs text-gray-500'>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
            </div>
        </>
    );
}

export default BlogPageActions;