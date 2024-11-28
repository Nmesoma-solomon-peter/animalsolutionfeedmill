import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('blogs') // Tag for grouping in Swagger UI
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a blog image' })
  @ApiResponse({ status: 201, description: 'Image uploaded successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid file.' })
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { imageUrl: file.path };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new blog post' })
  @ApiResponse({ status: 201, description: 'Blog post created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(
    @Body()
    createBlogDto: {
      title: string;
      content: string;
      imageUrl?: string;
      tags: string[];
      userId: number;
    },
  ) {
    return this.blogService.createBlog(createBlogDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all blog posts' })
  @ApiResponse({
    status: 200,
    description: 'List of blog posts retrieved successfully.',
  })
  findAll() {
    return this.blogService.getBlogs();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a blog post by ID' })
  @ApiResponse({
    status: 200,
    description: 'Blog post retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'Blog post not found.' })
  findOne(@Param('id') id: string) {
    return this.blogService.getBlogById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog post by ID' })
  @ApiResponse({ status: 200, description: 'Blog post updated successfully.' })
  @ApiResponse({ status: 404, description: 'Blog post not found.' })
  update(
    @Param('id') id: string,
    @Body()
    updateBlogDto: Partial<{
      title: string;
      content: string;
      imageUrl?: string;
      tags: string[];
    }>,
  ) {
    return this.blogService.updateBlog(+id, updateBlogDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog post by ID' })
  @ApiResponse({ status: 200, description: 'Blog post deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Blog post not found.' })
  remove(@Param('id') id: string) {
    return this.blogService.deleteBlog(+id);
  }
}
