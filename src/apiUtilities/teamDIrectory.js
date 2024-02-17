import axios from "axios";

export const getTeamDirectory = async () => {
  return await axios.get(
    "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
  );
};
