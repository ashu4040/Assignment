import { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=PPFfUA-pEbnMIvnWn6-_dNh0xxlwixrsbDCiG0kuBtf_e1zHASfW6PRyjaZE0-b_QMhK4OnKEVvXLHBFRLxHFa4p_IK8qFNFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK3a6ffQ0WZQTSV9tYlXQrkBXtdxBtrA5zRLqCGQCLDX3Fpz3FiupYRsvf6gd_3HPpzwDVuA5vmK3aj4Vzza9cL29WBguNVO8Nz9Jw9Md8uu&lib=MzE5-sfm5hFPrnMdKGQXaFGthwKWac3M9"
      );
      const json = await response.json();
      console.log("Fetched Data:", json);
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ApiContext.Provider value={{ data, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
