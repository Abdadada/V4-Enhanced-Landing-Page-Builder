import { MediaItem } from '../../types/media';

export const VideoElement = ({ component }: { component: MediaItem }) => {
  return (
    <video
      src={component.previewUrl}
      controls
      style={{
        width: component.width,
        height: component.height,
      }}
    />
  );
};
