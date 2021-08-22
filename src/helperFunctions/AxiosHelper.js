import axios from "axios";

export const fetchRandomUser = async () => {
  const params = { nat: "US" };
  return await axios
    .get("https://randomuser.me/api/", { params })
    .then(({ data }) => {
      return { data, success: true };
    })
    .catch((error) => {
      console.error("[fetchRandomUser][Get] Error: ", error);
      return { data: {}, success: false };
    });
};
