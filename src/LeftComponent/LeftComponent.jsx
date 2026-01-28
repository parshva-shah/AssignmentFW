import React, { useEffect, useState } from "react";
import "./LeftComponent.css";
const LeftComponent = ({onChange = () => {}}) => {
  const [selectedId, setSelectedId] = useState(0)
  useEffect(()=>{
    onChange(selectedId)
  },[selectedId])
  return (
    <div className="leftComponent">
      <div className="leftCategory">
        <div className="leftTitle">Dashboard</div>
      </div>
      <div className="leftItems">
        <div className={`leftOptions ${selectedId === 0 ? 'selected' : null}`} onClick={(e)=>{setSelectedId(0)}}>All Data</div>
        <div className={`leftOptions ${selectedId === 1 ? 'selected' : null}`} onClick={(e)=>{setSelectedId(1)}}>Graphical Analysis</div>
        <div className={`leftOptions ${selectedId === 2 ? 'selected' : null}`} onClick={(e)=>{setSelectedId(2)}}>Salary - Year Wise</div>
        <div className={`leftOptions ${selectedId === 3 ? 'selected' : null}`} onClick={(e)=>{setSelectedId(3)}}>Alerts</div>
        <div className={`leftOptions ${selectedId === 4 ? 'selected' : null}`} onClick={(e)=>{setSelectedId(4)}}>Notifications</div>
      </div>
    </div>
  );
};

export default LeftComponent;
