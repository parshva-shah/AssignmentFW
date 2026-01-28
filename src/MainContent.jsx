import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";
const MainContent = () => {
  const defaultColDef = {
    // flex: 1,
  };

  const [page, setPage] = useState(0);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "20%", margin: "2rem 0 0 2rem" }}>
        <LeftComponent onChange={setPage} />
      </div>
      <div style={{ width: "75%", margin: "2rem 0 0 2rem" }}>
        <RightComponent page={page} />
      </div>
    </div>
  );
};

export default MainContent;
