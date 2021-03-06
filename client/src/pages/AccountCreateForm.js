import React from "react";
import FormWrapper from "../Components/FormWrapper";
import FormGroup from "../Components/FormGroup";
import FormLabel from "../Components/FormLabel";
import FormInput from "../Components/FormInput";

function AccountCreateForm() {
    return (
        <FormWrapper>
            <FormGroup>
                <FormLabel name="Username" />
                <FormInput id="username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <FormLabel name="Email" />
                <FormInput id="email" placeholder="someone@something.com" />
            </FormGroup>
            <FormGroup>
                <FormLabel name="Password" />
                <FormInput id="password" />
            </FormGroup>
            <FormGroup>
                <FormLabel name="Confirm Password" />
                <FormInput id="passwordConfirm" />
            </FormGroup>
        </FormWrapper>
    );
};

export default AccountCreateForm;