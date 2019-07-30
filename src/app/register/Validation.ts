import { FormGroup } from "@angular/forms";

export function confirmPassValidator(group:FormGroup)
{
    //obtain password and confirmPassword
    //compare and return
    //console.log(group.value.pass)
    console.log(group)
    let password=group.value.pass;
    let confirmPass=group.value.confirmPass;
    console.log(password,confirmPass)
    return password===confirmPass?true:false;

}