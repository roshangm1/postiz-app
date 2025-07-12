import { IsOptional, ValidateIf, IsUrl, IsBoolean, IsIn } from 'class-validator';

export class FacebookDto {
  @IsOptional()
  @ValidateIf(p => p.url)
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsBoolean()
  post_as_story?: boolean;

}
