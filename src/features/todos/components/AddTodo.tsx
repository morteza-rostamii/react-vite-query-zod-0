import {useMutation, useQueryClient,} from '@tanstack/react-query'
import todoService from '../services';
//import React, { useState, ChangeEvent } from 'react';
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { AddTodoSchema, TAddTodoInputs } from '../const&types/schemas';

export const AddTodo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors, 
      //isSubmitting
    },
  } = useForm<TAddTodoInputs>({
    defaultValues: {task: ''},

    // connect hook-form to zod validation
    resolver: zodResolver(AddTodoSchema),
  });

  const queryClient = useQueryClient();
  const {
    //mutate,
    mutateAsync: addTodoAct,
    isPending,
  } = useMutation({
    mutationFn: todoService.addTodo,
    // refetch the data
    onSuccess: () => {
      // this forces the refetch of todos
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    }
  });

  async function onSubmit(data:any) {
    await addTodoAct(data.task);
    // clean input
    reset();
  }

  return (
    <form
    className='flex items-center flex-col gap-3'
    onSubmit={handleSubmit(onSubmit)}
    >
      <input 
      type="text" 
      placeholder='Enter a new todo'      
      // i'm using zod for validation      
      // {required: 'this field is required.'}
      {...register('task', )}
      />
      <div>
        {errors?.task && errors.task.message}
      </div>
      <button 
      className='bg-green-100 p-2 py-1 rounded-md'
      type="submit"
      disabled={isPending}
      >
        {isPending ? 'Loading...' : 'ADD'}
      </button>
    </form>
  )
}
