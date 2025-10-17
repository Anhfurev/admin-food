const getCategories = async () => {
  const result = await fetch("http://localhost:4000/api/categories");
  const responseData = await result.json();
  setCategories(responseData.data);
};
