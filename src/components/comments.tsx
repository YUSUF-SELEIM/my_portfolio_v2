'use client';
import React, { useState, useEffect } from 'react';
import { getCommentsByBlogId } from '@/lib/actions'; // Ensure these functions are available
import { Button, Textarea } from '@nextui-org/react';

interface Comment {
    id: string;
    content: string;
    createdAt: Date;
    userEmail: string;
}

function Comments({ blogId, user }: { blogId: string, user: any }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentContent, setCommentContent] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const commentsData = await getCommentsByBlogId(blogId);
                setComments(commentsData);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [blogId]);

    const handleAddComment = async () => {
        try {
            if (user) {
                const newComment: Comment = {
                    id: '',
                    content: commentContent,
                    createdAt: new Date(),
                    userEmail: user.email,
                };
                setComments([...comments, newComment]);
                setCommentContent('');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="bg-gray-950 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">Comments</h2>
            <div className="mb-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="mb-4 border-b border-gray-700 pb-2">
                        <p className="text-sm text-gray-300">{comment.content}</p>
                        <p className="text-xs text-gray-500">{comment.userEmail} on {formatDate(comment.createdAt.toString())}</p>
                    </div>
                ))}
            </div>
            {user ? (
                <div className="mt-4">
                    <Textarea
                        color='primary'
                        placeholder="Add a comment..."
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                    />
                    <div className="w-full flex justify-end mt-6">
                        <Button
                            onClick={handleAddComment}
                            color='success'
                        >
                            Add Comment
                        </Button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 text-sm">Please log in to add a comment.</p>
            )}
        </div>
    );
}

export default Comments;
