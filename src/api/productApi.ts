import { baseURL } from "./config";

export const fetchProducts = async () => {
  const response = await fetch(baseURL);
  return response.json();
};
