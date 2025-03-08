import React, { useState } from "react";

const CreatePage = () => {
  const [ewProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <>
      <div className="max-w-sm">
        <div className="flex gap-8">
          <h1 className="text-2xl items-center">Create New Product</h1>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
