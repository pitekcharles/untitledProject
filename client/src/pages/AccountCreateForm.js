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
        </FormWrapper>
    );
};

export default AccountCreateForm;