import React from "react";

function Loader() {
  return (
    <div className="flex justify-center mx-auto h-screen items-center py-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default Loader;
