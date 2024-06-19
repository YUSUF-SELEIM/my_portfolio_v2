'use server';
import { prisma } from '../lib/prisma';

export async function incrementLove() {

  return await prisma.loveButton.upsert({
    where: { id: '6647cb1d27c8037816cb61a5' },
    update: { count: { increment: 1 } },
    create: { id: '6647cb1d27c8037816cb61a5', count: 1 },
  });

};

export async function getLoveCount() {
  return await prisma.loveButton.findFirst({
    select: {
      count: true,
    },
  });
};

export const createBlogPostWithTags = async (content: string, tagNames: string[], isPublic: boolean) => {
  try {
    // Ensure the tags exist or create new ones
    const tags = await Promise.all(tagNames.map(async name => {
      let tag = await prisma.tag.findUnique({ where: { name } });
      if (!tag) {
        tag = await prisma.tag.create({ data: { name } });
      }
      return tag;
    }));

    // Create the blog post
    const blogPost = await prisma.blog.create({
      data: {
        content,
        isPublic,
        tags: {
          create: tags.map(tag => ({ tagId: tag.id })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return blogPost;
  } catch (error) {
    console.error("Error creating blog post with tags:", error);
    throw error;
  }
};
export const updateBlogPostWithTags = async (id: string, content: string, tagNames: string[], isPublic: boolean) => {
  try {
    // Ensure the tags exist or create new ones
    const tags = await Promise.all(tagNames.map(async name => {
      let tag = await prisma.tag.findUnique({ where: { name } });
      if (!tag) {
        tag = await prisma.tag.create({ data: { name } });
      }
      return tag;
    }));

    // Update the blog post
    const updatedBlogPost = await prisma.blog.update({
      where: { id },
      data: {
        content,
        isPublic,
        tags: {
          deleteMany: {}, // Delete existing tags
          create: tags.map(tag => ({ tagId: tag.id })), // Add new tags
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return updatedBlogPost;
  } catch (error) {
    console.error("Error updating blog post with tags:", error);
    throw error;
  }
};
export const getBlogPostsWithTags = async () => {
  return await prisma.blog.findMany({
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
}
export const getBlogPost = async (id: string) => {
  return await prisma.blog.findUnique({
    where: { id },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
}
export const deleteBlogPost = async (id: string) => {
  try {
    await prisma.blog.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
};

export const likeBlogPost = async (blogId: string) => {
  try {
    await prisma.blog.update({
      where: { id: blogId },
      data: { likes: { increment: 1 } },
    });
  } catch (error) {
    console.error("Error liking blog post:", error);
    throw error;
  }
}

export const getTags = async () => {
  return await prisma.tag.findMany();
}

export const filterByTag = async (tagId: string) => {
  return await prisma.blog.findMany({
    where: {
      tags: {
        some: {
          tagId: tagId,
        },
      },
    },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
};

export const getTagName = async (tagId: string) => {
  const tag = await prisma.tag.findUnique({
    where: { id: tagId },
  });
  return tag?.name;
} 

export const addComment = async (blogId: string, userEmail: string, content: string) => {
  return await prisma.comment.create({
    data: {
      content,
      blog: {
        connect: { id: blogId }
      },
      userEmail
    }
  });
};

export const getCommentsByBlogId = async (blogId: string) => {
  return await prisma.comment.findMany({
    where: {
      blogId,
    },
  });
};