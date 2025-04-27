import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { MediaState, MediaItem } from '../../types/media';

export const useMediaStore = create<MediaState>((set) => ({
  mediaItems: [],
  
  addMediaItem: async (file) => {
    const id = uuidv4();
    const previewUrl = URL.createObjectURL(file);
    const type = file.type.startsWith('image/') ? 'image' : 'video';

    // Get dimensions if it's an image
    let width, height;
    if (type === 'image') {
      const dimensions = await getImageDimensions(file);
      width = dimensions.width;
      height = dimensions.height;
    }

    const newItem: MediaItem = {
      id,
      file,
      previewUrl,
      type,
      name: file.name,
      size: file.size,
      width,
      height,
    };

    set((state) => ({ mediaItems: [...state.mediaItems, newItem] }));
    return newItem;
  },

  removeMediaItem: (id) => {
    set((state) => ({
      mediaItems: state.mediaItems.filter((item) => {
        if (item.id === id) URL.revokeObjectURL(item.previewUrl);
        return item.id !== id;
      }),
    }));
  },
}));

const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
      URL.revokeObjectURL(img.src);
    };
  });
};
