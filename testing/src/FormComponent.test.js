import { shallow } from "enzyme";
import FormComponent from "./ind";

describe("FormComponent", () => {
  it("renders the correct content", () => {
    const wrapper = shallow(<FormComponent />);
    
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'Nandini' } });
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'nenavathnandini9912@gmail.com' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(alertMock).toHaveBeenCalledWith('Name:Nandini, email:nenavathnandini9912@gmail.com');

    alertMock.mockRestore();
  });
});
