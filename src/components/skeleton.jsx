export default function PageSkeleton() {
  return (
    <div className="animate-pulse">

      {/* Hero skeleton */}
      <div className="w-full h-[500px] bg-gray-200 rounded-xl mb-12"></div>

      {/* Content skeleton */}
      <div className="max-w-4xl mx-auto px-6 space-y-6">

        <div className="h-10 bg-gray-200 rounded w-3/4"></div>

        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>

        <div className="h-64 bg-gray-200 rounded-lg mt-8"></div>

        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

      </div>

    </div>
  )
}