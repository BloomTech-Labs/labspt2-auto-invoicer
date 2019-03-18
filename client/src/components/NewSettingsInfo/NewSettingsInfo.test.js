import React from "react";
import { render } from "react-testing-library";

import NewSettingsInfo from "../NewSettingsInfo";

describe("<NewSettingsInfo />", () => {
  it("renders New Settings Info", () => {
    render(
      <NewSettingsInfo
        settingsInfo={{
          email: "testing@gmail.com",
          oldPassword: "testing1",
          newPassword: "testing2",
          confirmPassword: "testing2"
        }}
      />
    );
  });
});
