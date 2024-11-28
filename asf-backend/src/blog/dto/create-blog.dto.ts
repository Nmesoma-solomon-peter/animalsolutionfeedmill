import { IsEmail, IsNotEmpty, IsOptional, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty({ example: 'My First Blog' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'This is the content of my first blog.' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 'http://example.com/image.jpg', required: false })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ example: ['nestjs', 'blog'], type: [String] })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  userId: number;
}