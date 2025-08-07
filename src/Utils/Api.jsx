export const fetchStates = async () => {
  const res = await fetch("https://meddata-backend.onrender.com/states");
  return await res.json();
};

export const fetchCities = async (state) => {
  const res = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
  return await res.json();
};

export const fetchMedicalCenters = async (state, city) => {
  const res = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
  return await res.json();
};