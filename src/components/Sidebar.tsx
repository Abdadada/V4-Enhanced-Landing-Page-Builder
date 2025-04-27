import { MediaUploader } from './media/MediaUploader';
import { useMediaStore } from '../lib/media/useMediaStore';

export const Sidebar = () => {
  const mediaItems = useMediaStore((state) => state.mediaItems);
  const removeMediaItem = useMediaStore((state) => state.removeMediaItem);

  return (
    <aside className="w-80 bg-gray-800 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Media Library</h2>
      <MediaUploader />

      <div className="mt-4 grid grid-cols-2 gap-2">
        {mediaItems.map((item) => (
          <div key={item.id} className="relative group">
            {item.type === 'image' ? (
              <img
                src={item.previewUrl}
                alt={item.name}
                className="w-full h-20 object-cover rounded"
              />
            ) : (
              <video
                src={item.previewUrl}
                className="w-full h-20 object-cover rounded"
                controls
              />
            )}
            <button
              onClick={() => removeMediaItem(item.id)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};
