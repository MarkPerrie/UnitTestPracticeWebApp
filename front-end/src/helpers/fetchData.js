export async function fetchData(addressUrl) {
    return await fetch(addressUrl)
      .then((response) => response.json())
      .then((data) => {
            return data
      })
  };

