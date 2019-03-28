import React from "react";
import PropTypes from "prop-types";

import "./CompanyDropdownList.css";

const CompanyDropdownList = props => {
  return (
    <section className="companies-list">
      <h3>Current Company</h3>
      <select onChange={props.handleChange}>
        <option value="create">create</option>
        {props.companies ? (
          props.companies.map(company => {
            return (
              <option value={company.companyName}>{company.companyName}</option>
            );
          })
        ) : (
          <option value="create">create</option>
        )}
      </select>
    </section>
  );
};

export default CompanyDropdownList;
