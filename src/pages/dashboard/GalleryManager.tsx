import { useState } from 'react';
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import Swal from 'sweetalert2';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  uploadDate: string;
}

export function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: '1',
      url: '/images/gallery/1.jpeg',
      title: 'School Event',
      description: 'Annual function celebration',
      uploadDate: '2024-03-15',
    },
  ]);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004d40',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setImages(images.filter(image => image.id !== id));
        Swal.fire(
          'Deleted!',
          'The image has been deleted.',
          'success'
        );
      }
    });
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // In a real application, you would handle file upload here
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: URL.createObjectURL(formData.get('image') as File),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      uploadDate: new Date().toISOString().split('T')[0],
    };

    setImages([...images, newImage]);
    form.reset();
    
    Swal.fire({
      icon: 'success',
      title: 'Image Added',
      text: 'New image has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Gallery Manager</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Image</h2>
        
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="hidden"
              id="image-upload"
            />
            <label 
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-gray-600">Click to upload image</span>
              <span className="text-sm text-gray-500">PNG, JPG up to 5MB</span>
            </label>
          </div>
          
          <input
            type="text"
            name="title"
            placeholder="Image Title"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          
          <textarea
            name="description"
            placeholder="Image Description"
            required
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          ></textarea>
          
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors w-full"
          >
            <Plus className="w-5 h-5" />
            Add Image
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Gallery Images</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="group relative rounded-lg overflow-hidden shadow-md">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                  <p className="text-gray-300 text-xs mt-1">
                    Uploaded: {new Date(image.uploadDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button 
                    className="p-2 text-white hover:text-red-400 transition-colors"
                    onClick={() => handleDelete(image.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}