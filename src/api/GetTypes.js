import URL from "./BaseUrl";

const GetTypes = async () => {
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    redirect: "follow",
    method: "GET",
  };

  try {
    const response = await fetch(`${URL}types`, requestOptions);
    const result = await response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};

export default GetTypes;
