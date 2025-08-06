"use client";
import { useState, useEffect } from "react";

export const useCheckComponent = () => {
  const [data, setData] = useState<{ text: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchingHandler = async () => {
    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not set");
    }

      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchingHandler();
      if (result) setData(result); 
    };

    fetchData();
  }, []);

  return { data, isLoading };
};