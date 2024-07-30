import React from "react";
import { shallow } from "enzyme";
import FormComponent from "./ind";
describe("FormComponent", () => {
  it("renders the correct content", () => {
    const wrapper = shallow(<FormComponent />);
    expect(wrapper.text()).toBe(`Name:${name.value}, email:${email.value}`);
  });
});
