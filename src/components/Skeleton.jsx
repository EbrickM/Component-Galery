import { SkeletonCard } from "./SkeletonCard"

export const Skeleton = () => {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:ml-48 p-3"> 
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
    </div>
  )
}
