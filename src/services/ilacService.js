import ilaclar from '../data/ilaclar.json';
// Tüm ilaçları getirir
export const getAllDrugs = () => {
  return Promise.resolve(ilaclar);
};

// Belirli bir ilacı ID ile getirir
export const getDrugById = (id) => {
  const drug = ilaclar.find((ilac) => ilac.id === parseInt(id));
  return Promise.resolve(drug);
};
