"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export const useLikeContext = () => {
  return useContext(LikeContext);
};

export const LikeProvider = ({ children }) => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const storedLikeCount = isLocalStorageAvailable
    ? localStorage.getItem("likeCount")
    : null;
  console.log("Stored Like Count:", storedLikeCount);

  const initialLikeCount = parseInt(storedLikeCount, 10) || 0;
  console.log("Initial Like Count:", initialLikeCount);

  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [userLiked, setUserLiked] = useState(false);

  const likeHandler = () => {
    if (!userLiked) {
      setLikeCount((prevCount) => prevCount + 1);
      setUserLiked(true);
    }
  };

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem("likeCount", likeCount.toString());
    }
  }, [likeCount, isLocalStorageAvailable]);

  return (
    <LikeContext.Provider value={{ likeCount, userLiked, likeHandler }}>
      {children}
    </LikeContext.Provider>
  );
};
