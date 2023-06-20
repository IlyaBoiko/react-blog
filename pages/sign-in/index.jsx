import React, {useState} from "react";
import Link from "next/link";
import {Input} from "../../components/UI/Input/Input";
import {Button} from "../../components/UI/Button/Button";
import css from "./signIn.module.css";
import {log} from "next/dist/server/typescript/utils";




export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function FormHandler (e) {
        e.preventDefault();
        fetch('https://norma.nomoreparties.space/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify({
                email:email,
                password: password,
            }),
        })
            .then( res => {
                return res.json();
            },)
            .then(console.log);
    }
    return (
        <form className={css.form} onSubmit={FormHandler}>
            <fieldset className={css.form__inputs}>
                <legend>Sign in to Acc</legend>
                <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required value={email}>Email</Input>
                <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required value={password}>Password</Input>
            </fieldset>
            <Link href="/register">Register</Link>
            <Button type="submit">Sign In</Button>
        </form>
    )
};

export default SignIn;