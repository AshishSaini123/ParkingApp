
import {render,screen} from "@testing-library/react";
import User from "@testing-library/user-event";
import UserForm from "../components/UserForm";


test("From has one input and one submit button",()=>{

    //Render the component wich needs to be tested
    render (<UserForm />);

    //Find the elements ehich should be in the Component and needs to be tested
    let input=screen.getByPlaceholderText("Enter spaces");
    let button=screen.getByRole("button");

    //check whether they are in the documents or not 
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();


})