import { MediaItem } from '../../types/media';

export const ImageElement = ({ component }: { component: MediaItem }) => {
  return (
    <img
      src={component.previewUrl}
      alt={component.name}
      style={{
        width: component.width,
        height: component.height,
        borderRadius: '0px',
      }}
      className="object-cover"
    />
  );
};
