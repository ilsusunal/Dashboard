import React from 'react';
import { useForm } from 'react-hook-form';


export function TeamModal({ isOpen, onClose, onSubmit }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            description: "",
            employees: [],
            overall_score: "0",
            title: "",
            total_employee_count: 0
        }
    });
    
    const onSubmitForm = (data) => {
        onSubmit(data);
        onClose();
        reset();
    };

    if (!isOpen) return null;

    return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="bg-white dark:bg-indigo-100 p-6 rounded-lg max-w-sm w-full mx-4 z-10">
        <div className='flex justify-between items-center mb-4'>
            <h3 className="text-lg font-medium">Add Team</h3>
            <button className="px-4 py-2 bg-yellow-400 text-white rounded-full"
                onClick={onClose}>
            <i className="fa-solid fa-xmark"/>
            </button>
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)} className="mt-4">
            <div className="mb-2">
            <input
              type="text"
              {...register('title', { required: "Title is required" })}
              className="mt-1 p-2 border rounded w-full"
              placeholder='Title'
            />
            {errors.title && <p className="text-pink-700 text-xs">{errors.title.message}</p>}
            </div>
            <div className="mb-2">
            <input
              type="text"
              {...register('description', { required: "Description is required" })}
              className="mt-1 p-2 border rounded w-full"
              placeholder='Description'
            />
            {errors.description && <p className="text-pink-700 text-xs">{errors.description.message}</p>}
            </div>
            
            <button
              type="submit"
              className="grow px-4 py-2 text-sm font-medium text-white bg-lavender-400 rounded-xl"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
    </>
    );
}
