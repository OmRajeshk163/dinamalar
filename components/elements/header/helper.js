import axios from "axios";

export const getTabList = async () => {
  const tabsAPi = "/api/tabs";
  const tabList = await axios.get(tabsAPi, { timeout: 15000 });
  return tabList.data;
};
