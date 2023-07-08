import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, MinLength } from 'class-validator';
export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;
}
