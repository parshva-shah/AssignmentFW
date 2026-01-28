import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className={"headerStyle"}>
      <div className={"logoContainer"}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAkFBMVEUAAAAAdLv///9hqdVkZGSzs7OmzucoKCifyuX1+v05k8oAJDkuLi4Adr4MLUELSW+mpqYLXY4ujcdPT0/JyclSodGz1evPz8+1wcrC3e7m8vkVf8KSxOPt9foWgMHS5/NwstkLCwsgQ1k1Z4cDHS5Bep5Mkr1LnM9ycnKFhYXr6+sZGRl6enoQEBDb29umsbisa7k/AAABlElEQVR4nO3a21LCMBRGYZpaoRVPKGpNAfEsgr7/24n3DZY69M/urPUAmf1NZucqA2e8gXqA/wZAHQB1fQHcZtF1d1NXeV8POBpE19lpUpcvqplpwLZJaRyQ+JFxQOKr3DZgKzAOSOYL44AktQ6Yz4wDktI6oLIOeLAOSAEcOADqAKgDoA6AOgDqAKgDoA6AOgDqAKgDoA6AOgDqAIRaDrvp8VCAK9dNo93zAwAAAAAAAAAAAAAAAAAAAAAAAOgYsBnv39Mk2DTvGtCm8/AcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPQQsowI8XwZ7uQ70GhPgJHzmNDCLSwEAAAAAAAAAAAAAAAAAAAAAAADsALzlgawAfOiPvTcCaBMAAAAAAAAAQAnwaaDCCKB1ANQBUAdAHQB1ANQBUAdAHQB1ANQBUAdAXc8A79YBH9YBmXXA6tM4YI8tjhTw1fgKIgU0X+NYAfnaOMC5hoJ4AS4bGge41Xq8MQ34fY2yiz/6Po6jsh5gLgDqAKgDoO4HpFezLABgiy0AAAAASUVORK5CYII="
          alt="Company Logo"
          className={"logoStyle"}
        />
        <span className={"companyName"}>FactWise</span>
      </div>
      {/* <div style={dashboardLabel}>Employee Dashboard</div> */}
      <div className={"dashboardLabel"}>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
