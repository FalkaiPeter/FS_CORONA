import { Button, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { AreaChart, BarChart, DateField, LineChart, TabPanel } from "components";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { fetchData, refreshData } from "store/corona";

const App: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        gap: "2rem",
        marginTop: "10rem",
        width: "fit-content",
        marginInline: "auto",
      }}>
      <h1>{t("title")}</h1>
      <Button onClick={() => dispatch(refreshData())}>{t("refresh")}</Button>
      <Box sx={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr", width: "100%" }}>
        <DateField field="start" />
        <DateField field="end" />
      </Box>

      <Tabs value={index} onChange={(_, val) => setIndex(val)}>
        <Tab label={t("lineTab")} />
        <Tab label={t("areaTab")} />
        <Tab label={t("barTab")} />
      </Tabs>

      <TabPanel index={0} value={index}>
        <LineChart />
      </TabPanel>
      <TabPanel index={1} value={index}>
        <AreaChart />
      </TabPanel>
      <TabPanel index={2} value={index}>
        <BarChart />
      </TabPanel>
    </Box>
  );
};

export default App;
