import { IsEmail, IsOptional, IsString } from 'class-validator';
export class SignUpDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  avatarUrl?:string;
}
