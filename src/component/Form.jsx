import React from 'react'
import { useForm } from 'react-hook-form'

import { useSubmissionContext } from '../hook/useSubmission'

export default function Form() {
  const { register, handleSubmit, errors } = useForm()
  const { courses, mediaTypes, submitData } = useSubmissionContext()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="[Last Name, First Name]"
          ref={register({
            required: 'This field is required',
            minLength: {
              value: 4,
              message: 'Minimum of 4 characters is required',
            },
            maxLength: {
              value: 60,
              message: 'maximum of 60 characters is required',
            },
          })}
        />
        <FormFieldError errors={errors} name="name" />

        <label htmlFor="idNumber">ID Number</label>
        <input
          type="text"
          name="idNumber"
          placeholder="[1181234]"
          ref={register({
            required: 'This field is required',
          })}
        />
        <FormFieldError errors={errors} name="idNumber" />

        <label htmlFor="enrollment">Enrollment Status</label>
        <select
          name="enrollment"
          ref={register({ required: 'This field is required' })}
        >
          <option value="">Select Status</option>
          <option value="enrolled">
            I am enrolled this 2nd term, AY 2020-2021
          </option>
          <option value="not-enrolled">
            I am NOT enrolled this 2nd term, AY 2020-2021
          </option>
        </select>
        <FormFieldError errors={errors} name="enrollment" />

        <label htmlFor="course">Course</label>
        <select
          name="course"
          ref={register({ required: 'This field is required' })}
        >
          <option value="">Select Course</option>
          {courses
            ? courses.map((course) => {
                return (
                  <option value={course.id} key={course.id}>
                    [{course.code}] {course.course}
                  </option>
                )
              })
            : null}
        </select>
        <FormFieldError errors={errors} name="course" />

        <label htmlFor="email">Benilde Mail</label>
        <input
          type="email"
          name="email"
          placeholder="[name.surname@benilde.edu.ph]"
          ref={register({
            required: 'This field is required',
          })}
        />
        <FormFieldError errors={errors} name="email" />

        <label htmlFor="phoneNo">Phone Number</label>
        <input
          type="text"
          name="phoneNo"
          placeholder="[09161234567]"
          ref={register({
            required: 'This field is required',
          })}
        />
        <FormFieldError errors={errors} name="phoneNo" />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="[Title of Entry]"
          ref={register({
            required: 'This field is required',
            minLength: {
              value: 1,
              message: 'Minimum of 1 characters is required',
            },
            maxLength: {
              value: 100,
              message: 'maximum of 100 characters is required',
            },
          })}
        />
        <FormFieldError errors={errors} name="title" />

        <label htmlFor="caption">Caption</label>
        <textarea
          name="caption"
          ref={register({
            required: 'This field is required',
            minLength: {
              value: 1,
              message: 'Minimum of 1 characters is required',
            },
            maxLength: {
              value: 200,
              message: 'maximum of 200 characters is required',
            },
          })}
        />
        <FormFieldError errors={errors} name="caption" />

        <label htmlFor="drive">Enter your piece here (Google Drive Link)</label>
        <input
          type="text"
          name="drive"
          placeholder="[drive.google.com/mypiece]"
          ref={register({
            required: 'This field is required',
          })}
        />
        <FormFieldError errors={errors} name="drive" />

        <label htmlFor="type">Type of Entry</label>
        <select
          name="type"
          ref={register({ required: 'This field is required' })}
        >
          <option value="">Select Type</option>
          {mediaTypes
            ? mediaTypes.map((type, index) => {
                return (
                  <option value={type} key={index}>
                    {type}
                  </option>
                )
              })
            : null}
        </select>
        <FormFieldError errors={errors} name="type" />

        <input type="submit" value="Submit Form" />
      </form>
    </>
  )
}

export const FormFieldError = ({ errors, name }) => {
  return errors && errors.hasOwnProperty(name) ? (
    <>
      <p>ERROR: {errors[name].message}</p>
    </>
  ) : null
}
