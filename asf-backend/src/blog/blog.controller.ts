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
  UseGuards,
  Request,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('blogs')
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
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new blog post' })
  @ApiResponse({ status: 201, description: 'Blog post created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createBlogDto: CreateBlogDto, @Request() req) {
    const userId = req.user.userId;
    return this.blogService.createBlog({ ...createBlogDto, userId });
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
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a blog post by ID' })
  @ApiResponse({ status: 200, description: 'Blog post updated successfully.' })
  @ApiResponse({ status: 404, description: 'Blog post not found.' })
  update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
    @Request() req,
  ) {
    const userId = req.user.userId;
    return this.blogService.updateBlog(+id, { ...updateBlogDto, userId });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a blog post by ID' })
  @ApiResponse({ status: 200, description: 'Blog post deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Blog post not found.' })
  remove(@Param('id') id: string) {
    return this.blogService.deleteBlog(+id);
  }
}
