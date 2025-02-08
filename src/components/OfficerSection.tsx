interface OfficerProps {
  name: string;
  designation: string;
  image: string;
}

export function OfficerSection({ name, designation, image }: OfficerProps) {
  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
        <div className="border-b-2 border-[#004d40] mb-4">
          <h3 className="text-xl font-bold text-[#004d40]">Block Education Officer</h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img 
            src={image} 
            alt={name}
            className="w-60 h-60 rounded-full object-cover mb-4"
          />
          <h4 className="text-xl font-bold text-center">{name}</h4>
          <p className="text-gray-600 font-semibold">{designation}</p>
        </div>
      </div>
    </div>
  );
}