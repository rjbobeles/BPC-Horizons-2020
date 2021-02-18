import React from 'react'
import { useForm } from 'react-hook-form'

import { useSubmissionContext } from '../hook/useSubmission'
import { useSubmissionStatusContext } from '../hook/useSubmissionStatus'

import Loading from './Loading'

export default function Form() {
  const { register, handleSubmit, errors } = useForm()
  const {
    courses,
    mediaTypes,
    submitData,
    setSubmitting,
  } = useSubmissionContext()
  const { manageAppViewSubmit } = useSubmissionStatusContext()

  const onSubmit = async (data) => {
    setSubmitting(true)
    await submitData(data).then((res) => manageAppViewSubmit(res))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-8 lg:pr-16">
            <div className="form-row">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="[Last Name, First Name]"
                ref={register({
                  required: 'This field is required',
                  pattern: {
                    value: /^(((\s)?([A-Z]|Ñ)([a-z]|ñ)*(-)?)+,((\s)([A-Z]|Ñ)(\.)?([a-z]|ñ)*)+)$/,
                    message: 'Name must be Last Name, First Name',
                  },
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
            </div>
            <div className="form-row">
              <label htmlFor="idNumber">ID Number</label>
              <input
                type="text"
                name="idNumber"
                placeholder="[1181234]"
                ref={register({
                  required: 'This field is required',
                  pattern: {
                    value: /^(1)[0-5][0-9]([0-9]{5}\b)$/,
                    message: 'Must be a valid Benilde ID number',
                  },
                })}
              />
              <FormFieldError errors={errors} name="idNumber" />
            </div>
            <div className="form-row">
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
            </div>
            <div className="form-row">
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
            </div>
            <div className="form-row">
              <label htmlFor="email">Benilde Mail</label>
              <input
                type="email"
                name="email"
                placeholder="[name.surname@benilde.edu.ph]"
                ref={register({
                  required: 'This field is required',
                  pattern: {
                    value: /^[a-z0-9](\.?[a-z0-9]){5,}@benilde.edu.ph$/,
                    message: 'Email must be a valid Benilde email',
                  },
                })}
              />
              <FormFieldError errors={errors} name="email" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-16">
            <div className="form-row">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="text"
                name="phoneNo"
                placeholder="[09234123123]"
                ref={register({
                  required: 'This field is required',
                  pattern: {
                    value: /^(\+)?(09|63)(\s)?[0-9]{2,3}(\s)?[0-9]{3}(\s)?[0-9]{4}\b/,
                    message: 'Number must be a valid Philippine number',
                  },
                })}
              />
              <FormFieldError errors={errors} name="phoneNo" />
            </div>
            <div className="form-row">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder="[My Masterpiece]"
                ref={register({
                  required: 'This field is required',
                  minLength: {
                    value: 1,
                    message: 'Minimum of 1 characters is required',
                  },
                  maxLength: {
                    value: 800,
                    message: 'maximum of 800 characters is required',
                  },
                })}
              />
              <FormFieldError errors={errors} name="title" />
            </div>
            <div className="form-row">
              <label htmlFor="caption">Caption</label>
              <textarea
                name="caption"
                rows="1"
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
            </div>
            <div className="form-row">
              <label htmlFor="drive">
                Enter your piece here (Google Drive Link)
              </label>
              <input
                type="text"
                name="drive"
                placeholder="[drive.google.com/mypiece]"
                ref={register({
                  required: 'This field is required',
                  pattern: {
                    value: /^(.)*(docs|drive).google.com(.)*\b/,
                    message: 'Must be a valid google drive link',
                  },
                })}
              />
              <FormFieldError errors={errors} name="drive" />
            </div>
            <div className="form-row">
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
            </div>
            <div className="form-row">
              <p className="text-xs disclaimer karla">
                Any submitted content in Horizons: Memento becomes the property
                of the Benildean Press Corps (BPC) and the Student Publications
                Unit (SPU). By willingly submitting to Horizons: Memento, the
                contributor gives permission to use the said content in any way
                BPC and SPU see fit. In addition, all submissions must be
                original works. If found guilty of plagiarism, violators will be
                subject to the College’s rules and regulations.
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto text-xl karla block bg-roast px-5 py-3 text-ceramic cursor-pointer hover:bg-kofi mt-8 md:mt-16 w-full md:w-auto submit"
        >
          <Loading />
        </button>
      </form>
    </>
  )
}

export const FormFieldError = ({ errors, name }) => {
  return errors && errors.hasOwnProperty(name) ? (
    <>
      <p>{errors[name].message}</p>
    </>
  ) : null
}
