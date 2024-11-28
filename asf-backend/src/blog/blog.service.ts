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
    return this.prisma.blog.findMany();
  }

  async getBlogById(id: number) {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  async updateBlog(
    id: number,
    data: Partial<{
      title: string;
      content: string;
      imageUrl?: string;
      tags: string[];
    }>,
  ) {
    return this.prisma.blog.update({ where: { id }, data });
  }

  async deleteBlog(id: number) {
    return this.prisma.blog.delete({ where: { id } });
  }
}
