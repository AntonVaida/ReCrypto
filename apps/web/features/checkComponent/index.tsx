"use client";
import { useCheckComponent } from "./useCheckComponent";

export const CheckComponent = () => {
  const { data, isLoading } = useCheckComponent();

  return (
    <div className="h-[112px] w-full flex justify-center items-center bg-amber-700">
      {isLoading ? 
        <span className="text-2xl font-bold text-red-500">Loading...</span> : 
        <span className="text-2xl font-bold text-pink-500">{data?.text}</span>
      }
    </div>
  )
};
