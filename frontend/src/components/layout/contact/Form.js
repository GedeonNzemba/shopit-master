import React from "react";
import { useForm } from "react-hook-form";
import Stack from '@mui/material/Stack';


export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2}>
        <input style={{border: '1px solid black'}} {...register("firstName", { required: "this is required", maxLength: 20 })} />
        <input style={{border: '1px solid black'}} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input style={{border: '1px solid black'}} type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />

        </Stack>
    </form>
  );
}