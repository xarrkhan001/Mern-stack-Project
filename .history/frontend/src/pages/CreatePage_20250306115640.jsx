import React, { useState } from "react";

const CreatePage = () => {
  const [ewProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <>
      <div className="max-w-sm">Create component</div>
    </>
  );
};

export default CreatePage;
