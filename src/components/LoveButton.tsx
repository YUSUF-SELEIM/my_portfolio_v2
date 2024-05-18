'use client';
import { Button, Spinner } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { getLoveCount, incrementLove } from '@/lib/actions';

function LoveButton() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false); 

  const fetchLoveCount = async () => {
    try {
      const data = await getLoveCount();
      setCount(data?.count || 0);
    } catch (error) {
      console.error('Error fetching love count:', error);
    }
  };

  useEffect(() => {
    fetchLoveCount();
  }, []);

  const handleClick = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true); // Show loading spinner
    try {
      await incrementLove();
      await fetchLoveCount(); // Refetch the love count after incrementing
    } catch (error) {
      console.error('Error updating love count:', error);
    }
    setIsLoading(false); // Hide loading spinner
  };

return (
    <div className="flex space-x-2 items-center justify-between">
        <span className="text-xs text-red-700">I Love This Website</span>
        <Button size="md" isIconOnly color="danger" aria-label="Like" onClick={handleClick} disableRipple={isLoading} disableAnimation={isLoading}>
            {isLoading ? <Spinner size="sm" color='white' /> : <FaHeart/>}
        </Button>
        <span className="text-xs text-red-700 font-extrabold animate-pulse">{count}</span>
    </div>
);
}

export default LoveButton;
