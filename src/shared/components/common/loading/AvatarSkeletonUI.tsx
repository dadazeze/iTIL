import React from "react";
import { Skeleton } from "../../ui/skeleton";

export default function AvatarSkeletonUI() {
  return (
    <div className="flex items-center space-x-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-1">
        <Skeleton className="h-5 w-[100px]" />
        <Skeleton className="h-5 w-[110px]" />
      </div>
    </div>
  );
}
