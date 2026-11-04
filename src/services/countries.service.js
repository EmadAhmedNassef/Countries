import { apiInstance } from "../api/axios";

export const getCountries = async ({
  page = 1,
  limit = 25,
  region,
  search,
} = {}) => {
  const { data } = await apiInstance.get("", {
    params: {
      limit,
      offset: (page - 1) * limit,
      ...(region && { region }),
      ...(search && { q: search }),
    },
  });

  return data.data;
};

export const getCountryByName = async (name) => {
  const { data: response } = await apiInstance.get("", {
    params: {
      q: name,
      limit: 1,
    },
  });

  const country = response?.data?.objects?.[0] ?? response?.objects?.[0];

  if (!country) {
    throw new Error("Country not found.");
  }

  return country;
};
