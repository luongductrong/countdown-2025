export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-800 border-solid border-opacity-75"></div>
      <span className="ml-4 text-red-800 font-medium text-lg">Loading...</span>
    </div>
  );
}
