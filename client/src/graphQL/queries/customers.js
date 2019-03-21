import Post from '../index'

export const Customers = async (returnedData) => {
  const Customers = {
    query: `
      query {
        customers {
          ${returnedData}
        }
      }
    `
  }
  const listOfCustomers = await Post(Customers)
  return listOfCustomers.data.data
}

export const Customer = async (customerID, returnedData) => {
  const Customer = {
    query: `
      query {
        customer(customerID: "${customerID}") {
          ${returnedData}
        }
      }
    `
  }
  const returnedCustomer = await Post(Customer);
  return returnedCustomer.data.data
}