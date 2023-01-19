import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup'

const schema = yup.object({
  firstName: yup.string().required('some msg'),
  age: yup.number().positive().integer().required(),
}).required();

const FormModule = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  console.log(errors, 'errors')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} type='text' />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} type='number' />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default FormModule;