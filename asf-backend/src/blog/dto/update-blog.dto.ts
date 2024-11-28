import { IsOptional, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlogDto {
  @ApiProperty({ example: 'Updated Blog Title', required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ example: 'Updated content for the blog.', required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    example: 'http://example.com/updated-image.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    example: ['updated', 'tags'],
    type: [String],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty({ example: 2, required: false })
  @IsOptional()
  userId?: number;
}
