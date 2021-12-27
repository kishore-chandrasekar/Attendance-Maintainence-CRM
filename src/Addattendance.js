import React from 'react'
import { useFormik } from "formik"
import { useParams } from 'react-router-dom'
function Addattendance() {
    let Params=useParams()
    const formik = useFormik({
        initialValues: {
            attend: "",
            date: "",
            userid: Params.id
        },
        onSubmit: async (values) => {
            await fetch("https://6196d2b3af46280017e7e2d0.mockapi.io/attendance",{
                method: "POST",
                body:JSON.stringify(values),
                headers:{
                    "Content-type" : "application/json"
                }
            })
           alert("Attendence Added Successfully")
        }
    })

    return (

        <>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Add-Attendance</h1>

            </div>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <select name="attend" className='form-control'
                                onChange={formik.handleChange}
                                values={formik.values.attend}>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <input name="date" type='date' className='form-control'
                                onChange={formik.handleChange}
                                values={formik.values.date}>

                            </input>

                        </div>
                        <div className="col-lg-6 mt-3">
                            <input type="submit" className='btn btn-primary btn-sm'>
                            </input>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addattendance
