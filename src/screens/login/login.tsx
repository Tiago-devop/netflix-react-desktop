import { useCallback, useEffect, useState } from "react";
import {  Wrapper } from "./login.styled";
import { Grid } from "@mui/material";
import * as yup from "yup";
import Input from './../../components/input/input';
import Button from './../../components/button/button';
import FormError from './../../components/form-error/form-error';

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  console.log(error);
  const handleChange = useCallback(
    ({ target }: any) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSend = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(data);
      setError("");
    } catch (error: any) {
      setError(error.errors);
    }
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid
        container
        item={true}
        xs={2}
        justifyContent="center"
        alignContent="center"
      >
        <Input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="password"
          type="password"
          onChange={handleChange}
        />
        <Button onClick={handleSend}>Entrar</Button>
        {error ? <FormError message={error} /> : null}
      </Grid>
    </Wrapper>
  );
}
