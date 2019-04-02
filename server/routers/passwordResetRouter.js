const express = require("express");
const router = express.Router();
const postmark = require("postmark");
const { detect } = require("detect-browser");
const browser = detect();
require("dotenv").config();

router.post("/", (req, res) => {
  // Send an email:
  const client = new postmark.ServerClient(process.env.POSTMARK_API);
  const { email } = req.body;
  let browser_name, browser_version, browser_os;
  // get browser info
  if (browser) {
    browser_name = browser.name;
    browser_version = browser.version;
    browser_os = browser.os;
  } else {
    browser_name = "Undetected Browser Name";
    browser_version = "";
    browser_os = "Undetected OS";
  }
  client.sendEmailWithTemplate({
    From: "no-response@josephmt.com",
    To: `${email}`,
    TemplateAlias: "password-reset",
    TemplateModel: {
      product_name: "Auto-Invoice",
      product_url: "https://auto-invoicer.netlify.com/",
      name: "Test",
      action_url: "https://auto-invoicer.netlify.com/password-reset",
      operating_system: `${browser_os}`,
      browser_name: `${browser_name}, ${browser_version}`,
      support_url: "https://auto-invoicer.netlify.com/",
      company_name: "Auto-Invoicer",
      company_address: "WorldWide"
    }
  });
});
module.exports = router;
