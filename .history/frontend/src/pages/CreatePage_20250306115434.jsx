import React, { useState } from "react";

const CreatePage = () => {
  const [ewProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <>
      <div>Create component</div>
    </>
  );
};

export default CreatePage;
