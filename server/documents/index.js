module.exports = ({ ...file }) => {
  const today = new Date();
  const dueDate = new Date(today.setDate(today.getDate() + 30));
  const toAddress = file.addressTo.split("\n");
  const fromAddress = file.addressFrom.split("\n");
  return `
  <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      body {
        padding: 0;
        margin: 0;
      }
      .page {
        height: 11.245in;
        width: 95%;
        position: relative;
        padding: 20px 0;
        margin: 0 auto;
      }
      .page table {
        width: 100%;
      }
      .invoice-header {
        width: 100%;
        padding-bottom: 40px;
      }
      .invoice-header .logo {
        vertical-align: top;
      }
      .invoice-dates {
        width: 100%;
        text-align: right;
        font-size: 24px;
      }
      .invoice-addresses {
        width: 100%;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin: 20px 0;
      }
      .invoice-address {
        padding: 30px;
        line-height: 1.3;
        font-size: 20px;
      }
      .invoice-address .address-frto {
        font-size: 24px;
      }
      .page td .invoice-money {
        text-align: right;
        margin-left: auto;
        width: 300px;
      }
      .page td .invoice-money tr {
        line-height: 1.3;
        font-size: 20px;
      }
      .page td .invoice-money tr:nth-child(even) {
        background: lightgray;
      }
      .page td .invoice-money tr td {
        padding: 3px;
      }
      .page .invoice-next-page {
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
      }
      .invoice-terms {
        width: 600px;
        font-size: 24px;
        margin-top: 20px;
      }
      .invoice-terms p {
        font-size: 20px;
      }
      #total-due {
        background: rgb(224, 123, 105);
      }
      #amount-paid {
        background: rgb(145, 195, 149);
      }
    </style>
  </head>
  <body>
    <div class="page">
      <table>
        <tr>
          <td>
            <table class="invoice-header">
              <tr>
                <td class="logo">
                  Logo
                </td>
                <td>
                  <table class="invoice-dates">
                    <tr>
                      <td>Invoice #: 123456</td>
                    </tr>
                    <tr>
                      <td>Date: 03/12/2019</td>
                    </tr>
                    <tr>
                      <td>Due Date: 04/11/2019</td>
                    </tr>
                    <tr>
                      <td>Amount Due: $105.56</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table class="invoice-addresses">
              <tr>
                <td class="invoice-address">
                  <strong class="address-frto">From: </strong><br />
                  Happy Inc.<br />
                  123 Happy St. <br />
                  Atlanta, GA 30075
                </td>
                <td class="invoice-address">
                  <strong class="address-frto">To: </strong><br />
                  Happy Inc.<br />
                  123 Happy St. <br />
                  Atlanta, GA 30075
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table class="invoice-money" cellspacing="0">
              <tr>
                <td>Subtotal:</td>
                <td>$105.00</td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>7%</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>$2.99</td>
              </tr>
              <tr id="total-due">
                <td>Total:</td>
                <td>105.56</td>
              </tr>
              <tr id="amount-paid">
                <td>Amount Paid:</td>
                <td>0.00</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <div class="invoice-terms">
              <h3>Terms of Services</h3>
              <p>
                Net 30 terms are for business customers only. Requests for Net
                30 terms will be reviewed and approved by the Company. Net 30
                terms are not guaranteed to all businesses.
              </p>
            </div>
          </td>
        </tr>
      </table>

      <h3 class="invoice-next-page">
        *** Please look on the next page for an Itemized list of your invoice.
        ***
      </h3>
    </div>
    <div class="page">
      <h1>Hello this is a test</h1>
    </div>
  </body>
</html>
  `;
};
