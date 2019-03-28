import React from "react";
// import components here
import SettingsForm from "../../components/SettingsForm";
import CompanyForm from "../../components/CompanyForm";

// import styles here
import "./SettingsPage.css";

const SettingsPage = props => {
  return (
    <section className="settings-view">
      <div>
        <h3>Personal Info</h3>
        <SettingsForm />
      </div>
      <div>
        <h3>Company Info</h3>
        {/* add a drop down for current companies and auto fill company form when clicked. Change state of form button from save to edit */}
        <CompanyForm />
      </div>
    </section>
  );
};

export default SettingsPage;
