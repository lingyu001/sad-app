export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-24 w-24 bg-blue-400 rounded-full"></div>
        <div className="text-xl font-medium text-gray-700 mt-6">Loading...</div>
      </div>
    </div>
  );
} 