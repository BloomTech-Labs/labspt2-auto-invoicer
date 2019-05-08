// import React from "react";
// import { render, Simulate, flushPromises } from "react-testing-library";

// import Dashboard from "../Dashboard/index";
// import FakeService from "./FakeService";

// describe("The Dashboard component", () => {
//   const todos = [
//     {
//       id: 1,
//       name: "Item 1"
//     },
//     {
//       id: 2,
//       name: "Item 2"
//     }
//   ];

//   const todoService = new FakeService(todos);

//   test("gets cards when component is mounted and displays them", async () => {
//     // Spy on getTodos function
//     const getTodosSpy = jest.spyOn(todoService, "getTodos");
//     const { container, getByTestId } = render(
//       <Dashboard todoService={todoService} />
//     );
//     await flushPromises();
//     const unorderedListOfTodos = getByTestId("todos-ul");
//     expect(unorderedListOfTodos.children.length).toBe(2);
//     // Expect that the spy was called
//     expect(getTodosSpy).toHaveBeenCalled();
//   });
// });

// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   render,
//   cleanup,
//   fireEvent,
//   getByTestId,
//   rerender
// } from "react-testing-library";
// import "jest-dom/extend-expect";
// import Dashboard from "../Dashboard/index";

// //snapshot testing again
// it("renders", () => {
//   const { asFragment } = render(<Dashboard />);
//   expect(asFragment()).toMatchSnapshot();
// });

// //render without crashing
// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Dashboard />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it("renders without crashing 2", () => {
//   const div = document.createElement("div");
//   render(<Dashboard />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
