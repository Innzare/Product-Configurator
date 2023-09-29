const domen = 'https://innzare-product-configurations.onrender.com/configurations';
const localhost = 'https://innzare-product-configurations.onrender.com/configurations';

export const getConfigurations = () => {
  return fetch(domen).then((res) => res.json());
};
