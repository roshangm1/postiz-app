'use client';

import {
  PostComment,
  withProvider,
} from '@gitroom/frontend/components/new-launch/providers/high.order.provider';
import { FacebookDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/facebook.dto';
import { Input } from '@gitroom/react/form/input';
import { Checkbox } from '@gitroom/react/form/checkbox';
import { useSettings } from '@gitroom/frontend/components/launches/helpers/use.values';

export const FacebookSettings = () => {
  const { register } = useSettings();

  return (
    <>
    <Input
      label={
        'Embedded URL (only for text Post)'
      }
      {...register('url')}
    />
    <div className="flex items-center gap-2">
      <Checkbox
        label="Post Story Too"
        {...register('post_as_story')}
      />
    </div>
    </>
  );
};

export default withProvider({
  postComment: PostComment.COMMENT,
  minimumCharacters: [],
  SettingsComponent: FacebookSettings,
  CustomPreviewComponent: undefined,
  dto: FacebookDto,
  checkValidity: undefined,
  maximumCharacters: 63206,
});
