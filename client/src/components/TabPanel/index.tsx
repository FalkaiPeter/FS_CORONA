import Box from "@mui/material/Box";
import { FC, PropsWithChildren } from "react";

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: FC<PropsWithChildren<Props>> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
