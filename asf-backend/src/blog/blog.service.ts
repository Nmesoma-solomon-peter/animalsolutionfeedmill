import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async createBlog(data: {
    title: string;
    content: string;
    imageUrl?: string;
    tags: string[];
    userId: number;
  }) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: data.userId },
    });

    if (!userExists) {
      throw new NotFoundException(
        `User with ID ${data.userId} does not exist.`,
      );
    }
    return this.prisma.blog.create({ data });
  }

  async getBlogs() {
    const blogs = await this.prisma.blog.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      content: blog.content,
      imageUrl: blog.imageUrl,
      tags: blog.tags,
      userId: blog.userId,
      createdAt: blog.createdAt,
      username: blog.user.name,
    }));
  }

  async getBlogById(id: number) {
    const blog = await this.prisma.blog.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found.`);
    }

    return {
      id: blog.id,
      title: blog.title,
      content: blog.content,
      imageUrl: blog.imageUrl,
      tags: blog.tags,
      userId: blog.userId,
      createdAt: blog.createdAt,
      username: blog.user.name,
    };
  }

  async updateBlog(
    id: number,
    data: Partial<{
      title: string;
      content: string;
      imageUrl?: string;
      tags: string[];
      userId: number;
    }>,
  ) {
    return this.prisma.blog.update({ where: { id }, data });
  }

  async deleteBlog(id: number) {
    return this.prisma.blog.delete({ where: { id } });
  }
}
