import { useDropzone } from 'react-dropzone';
import { useMediaStore } from '../../lib/media/useMediaStore';

export const MediaUploader = () => {
  const addMediaItem = useMediaStore((state) => state.addMediaItem);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
      'video/*': ['.mp4', '.webm'],
    },
    maxFiles: 10,
    onDrop: async (acceptedFiles) => {
      for (const file of acceptedFiles) {
        await addMediaItem(file);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`p-4 border-2 border-dashed rounded-lg ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      <p className="text-center">
        {isDragActive
          ? 'Drop files here'
          : 'Drag & drop images/videos, or click to browse'}
      </p>
    </div>
  );
};
