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

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { imageUrl: file.path };
  }

  @Post()
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
  findAll() {
    return this.blogService.getBlogs();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.getBlogById(+id);
  }

  @Patch(':id')
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
  remove(@Param('id') id: string) {
    return this.blogService.deleteBlog(+id);
  }
}
