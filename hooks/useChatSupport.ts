import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    // Function to load Tidio Chat
    const loadTidioChat = () => {
      const tidioScript = document.createElement("script");
      tidioScript.src = "//code.tidio.co/bmdwca2yqstcmxidfbfq4jpuwwdgoo29.js";
      tidioScript.async = true;
      document.body.appendChild(tidioScript);
    };

    // Load Tidio Chat when component mounts
    loadTidioChat();

    // Clean up function to remove Tidio Chat when component unmounts
    return () => {
      const tidioElement = document.getElementById("tidio-chat");
      if (tidioElement) {
        tidioElement.remove();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once
};
