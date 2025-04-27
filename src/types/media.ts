export type MediaType = 'image' | 'video';

export interface MediaItem {
  id: string;
  file: File;
  previewUrl: string; // Local blob URL
  type: MediaType;
  name: string;
  size: number;
  width?: number;
  height?: number;
}

export interface MediaState {
  mediaItems: MediaItem[];
  addMediaItem: (file: File) => Promise<MediaItem>;
  removeMediaItem: (id: string) => void;
}
