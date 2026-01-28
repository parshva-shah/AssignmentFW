import { AgGridReact } from "ag-grid-react";
// import { AgCharts } from "ag-charts-react";
import React, { useCallback, useEffect, useState } from "react";
// import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import data from "../fwList.json";
import "./RightComponent.css";
import { AgCharts } from "ag-charts-react";
import {
  CategoryAxisModule,
  LegendModule,
  LineSeriesModule,
  ModuleRegistry,
  NumberAxisModule,
  BarSeriesModule,
} from "ag-charts-community";

ModuleRegistry.registerModules([
  CategoryAxisModule,
  LegendModule,
  LineSeriesModule,
  NumberAxisModule,
  BarSeriesModule,
]);

const RightComponent = ({ page }) => {
  const [gridApi, setGridApi] = useState(null);
  const [hide, setHide] = useState({
    Salary: true,
    HireDate: true,
    PerformanceRating: true,
    ProjectsCompleted: true,
    Position: true,
  });

  const groupedByYear = data.employees.reduce((acc, item) => {
    const year = new Date(item.hireDate).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  const handleUpDown = useCallback(
    (e) => {
      const key = e?.key;

      e?.preventDefault();

      let rowIndex = gridApi?.getFocusedCell()?.rowIndex;

      if (key === "ArrowDown") {
        if (!rowIndex) {
          return;
        }
        const node = gridApi?.getDisplayedRowAtIndex(rowIndex);
        gridApi?.setFocusedCell(rowIndex);
        node.setSelected(true);
      }
      if (key === "ArrowUp") {
        if (rowIndex == undefined) {
          return;
        }
        const node = gridApi?.getDisplayedRowAtIndex(rowIndex);
        gridApi?.setFocusedCell(rowIndex);
        node.setSelected(true);
      }
    },
    [gridApi]
  );

  useEffect(() => {
    if (gridApi) window.addEventListener("keydown", handleUpDown);
    return () => {
      window.removeEventListener("keydown", handleUpDown);
    };
  }, [gridApi]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {page === 0 ? (
        <>
          <div className="rightCheckboxContainer">
            <div>
              <input
                type="checkbox"
                id="Salary"
                onClick={(e) => {
                  setHide((prev) => {
                    return {
                      ...prev,
                      Salary: !document.getElementById("Salary")?.checked,
                    };
                  });
                }}
              />
              Salary
            </div>
            <div>
              <input
                type="checkbox"
                id="HireDate"
                onClick={(e) => {
                  setHide((prev) => {
                    return {
                      ...prev,
                      HireDate: !document.getElementById("HireDate")?.checked,
                    };
                  });
                }}
              />
              Hire Date
            </div>
            <div>
              <input
                type="checkbox"
                id="PerformanceRating"
                onClick={(e) => {
                  setHide((prev) => {
                    return {
                      ...prev,
                      PerformanceRating:
                        !document.getElementById("PerformanceRating")?.checked,
                    };
                  });
                }}
              />
              Performance Rating
            </div>
            <div>
              <input
                type="checkbox"
                id="ProjectsCompleted"
                onClick={(e) => {
                  setHide((prev) => {
                    return {
                      ...prev,
                      ProjectsCompleted:
                        !document.getElementById("ProjectsCompleted")?.checked,
                    };
                  });
                }}
              />
              Projects Completed
            </div>
            <div>
              <input
                type="checkbox"
                id="Position"
                onClick={(e) => {
                  setHide((prev) => {
                    return {
                      ...prev,
                      Position: !document.getElementById("Position")?.checked,
                    };
                  });
                }}
              />
              Position
            </div>
          </div>
          <div style={{ height: "90%" }}>
            <AgGridReact
              rowData={data?.employees}
              pagination={true}
              paginationPageSize={10}
              rowSelection={{
                mode: "singleRow",
                checkboxes: false,
                enableClickSelection: true,
              }}
              onGridReady={(params) => {
                setGridApi(params.api);
                let node = params.api.getDisplayedRowAtIndex(0);
                //params.api.getRowNode(0)
                node.setSelected(true);
                params.api.setFocusedCell(0, "firstName");
              }}
              paginationPageSizeSelector={[10, 20, 50]}
              columnDefs={[
                {
                  field: "firstName",
                  headerName: "Name",
                  valueGetter: (e) => {
                    return `${e?.data?.firstName} ${e?.data?.lastName}`;
                  },
                  filter: "agTextColumnFilter",
                  pinned: "left",
                },
                { field: "email", headerName: "Email" },
                { field: "department", headerName: "Department" },
                {
                  field: "position",
                  headerName: "Position",
                  hide: hide.Position,
                },
                {
                  field: "salary",
                  headerName: "Salary",
                  hide: hide.Salary,
                  filter: "agNumberColumnFilter",
                },
                {
                  field: "hireDate",
                  headerName: "Hire Date",
                  hide: hide.HireDate,
                },
                { field: "age", headerName: "Age" },
                { field: "location", headerName: "Location" },
                {
                  field: "performanceRating",
                  headerName: "Performance Rating",
                  hide: hide.PerformanceRating,
                },
                {
                  field: "projectsCompleted",
                  headerName: "Projects Completed",
                  hide: hide.ProjectsCompleted,
                },
                { field: "skills", headerName: "Skills" },
                { field: "manager", headerName: "Manager" },
                {
                  field: "isActive",
                  headerName: "Active",
                  pinned: "right",
                  flex: 1,
                },
              ]}
            />
          </div>
        </>
      ) : page === 1 ? (
        <>
          <AgCharts
            options={{
              data: data?.employees,
              series: [
                {
                  type: "line",
                  xKey: "hireDate",
                  yKey: "salary",
                  yName: "Revenue:",
                  xName: "Hiring Date",
                },
              ],
              axes: {
                x: {
                  type: "category",
                  position: "bottom",
                  title: {
                    text: "Year of Hiring",
                  },
                },
                y: {
                  type: "number",
                  position: "left",
                  title: {
                    text: "Salaries",
                  },
                },
              },
            }}
          />
          <AgCharts
            options={{
              data: data?.employees,
              series: [
                {
                  type: "bar",
                  xKey: "hireDate",
                  yKey: "salary",
                  yName: "Revenue:",
                  xName: "Hiring Date",
                },
              ],
            }}
          />
        </>
      ) : page === 2 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1vh" }}>
          {Object.keys(groupedByYear).map((year) => {
            return (
              <div
                style={{
                  height: `${groupedByYear[year]?.length * 3 + 20}vh`,
                  width: "18vw",
                }}
              >
                <AgGridReact
                  rowData={groupedByYear[year]}
                  defaultColDef={{ flex: 1 }}
                  columnDefs={[
                    {
                      field: "hireDate",
                      valueGetter: (params) => {
                        let temp = new Date(params?.data?.hireDate);
                        return temp?.getFullYear();
                      },
                    },
                    {
                      field: "name",
                      valueGetter: (e) => {
                        return `${e?.data?.firstName} ${e?.data?.lastName}`;
                      },
                    },
                    { field: "salary" },
                  ]}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <>Content yet to be displayed</>
      )}
    </div>
  );
};

export default RightComponent;
