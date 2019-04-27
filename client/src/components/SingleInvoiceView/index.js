import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./SingleInvoiceView.css";
import { CompanyConsumer } from "../../contexts/CompanyContext";
export default class SingleInvoiceView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  headerellipsis = str => {
    return str.length > 10 ? str.slice(0, 10) : str;
  };
  // let taxpercent = Number(tax) * 100;
  capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  render() {
    return (
      <CompanyConsumer>
        {({ companyState }) => {
          const { invoiceID } = this.props.props.match.params;
          const invoice = companyState.invoices.find(
            invoice => `${invoice._id}` === invoiceID
          );
          return (
            <section>
              <Paper>
                <div className="page">
                  <table>
                    <tr>
                      <td>
                        <table className="invoice-header">
                          <tr>
                            <td className="company">
                              {this.capitalizeFirstLetter(invoice.companyName)}
                            </td>
                            <td>
                              <table className="invoice-dates">
                                <tr>
                                  <td>Invoice #: ${invoice.invoiceNumber}</td>
                                </tr>
                                <tr>
                                  <td>
                                    Date: 
                                    {this.headerellipsis(invoice.selectedDate)}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Due Date:{" "}
                                    {this.headerellipsis(
                                      invoice.invoiceDueDate
                                    )}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Amount Due: ${invoice.total}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table className="invoice-addresses">
                          <tr>
                            <td className="invoice-address">
                              <strong className="address-frto">From: </strong>
                              <br />${invoice.addressFrom}
                            </td>
                            <td className="invoice-address">
                              <strong className="address-frto">To: </strong>
                              <br />
                              {invoice.addressTo}
                              <br />
                              {invoice.cityTo},{" " + invoice.stateRegionTo}{" "}
                              {"  " + invoice.zipCodeTo}
                              <br />
                              {invoice.EmailTo} <br />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table className="invoice-money" cellspacing="0">
                          <tr>
                            <td>Subtotal:</td>
                            <td>${invoice.subtotal}</td>
                          </tr>
                          <tr>
                            <td>Discount:</td>
                            <td>${invoice.discount}</td>
                          </tr>
                          <tr>
                            <td>Tax:</td>
                            <td>{Number(invoice.tax) * 100}%</td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td>${invoice.shipping}</td>
                          </tr>
                          <tr id="total-due">
                            <td>Total:</td>
                            <td>${invoice.total}</td>
                          </tr>
                          <tr id="amount-paid">
                            <td>Amount Paid:</td>
                            <td>${invoice.amountPaid}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="invoice-terms">
                          <h3>Notes and terms (if applicable)</h3>
                          <p>
                            <strong>Notes:</strong>
                            {" " + invoice.notes + "."}
                          </p>
                          <p>
                            <strong>Terms:</strong>
                            {" " + invoice.terms + "."}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <h3 className="invoice-next-page">
                    Itemized list of your invoice (if applicable).
                  </h3>
                </div>
                <div className="page">
                  <table>
                    <tr>
                      <td>
                        <table className="invoice-header btm-header">
                          <tr>
                            <td className="company">
                             <h1> {this.capitalizeFirstLetter(invoice.companyName)}</h1>
                            </td>
                            <td>
                              <table className="invoice-dates">
                                <tr>
                                  <td>Invoice #: ${invoice.invoiceNumber}</td>
                                </tr>
                                <tr>
                                  <td>
                                    Date:{" "}
                                    {this.headerellipsis(invoice.selectedDate)}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Due Date:{" "}
                                    {this.headerellipsis(
                                      invoice.invoiceDueDate
                                    )}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Amount Due: ${invoice.total}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Itemized Summary</h3>
                      </td>
                    </tr>
                    <tr>
                      <table className="invoice-items" cellspacing="0">
                        <tr>
                          <td>Item</td>
                          <td>Quantity</td>
                          <td>Rate</td>
                          <td>Amount</td>
                        </tr>
                      </table>
                    </tr>
                  </table>
                </div>
              </Paper>
            </section>
          );
        }}
      </CompanyConsumer>
    );
  }
}
