import React from 'react'
import { useState, useEffect } from "react"
import { Link, Params, useParams } from 'react-router-dom'
function Attendancelist() {
    const [attendancee, setattendancee] = useState([])
    let Params = useParams()
    useEffect(async () => {
        try {
            let attendancedata = await fetch("https://6196d2b3af46280017e7e2d0.mockapi.io/attend")
            let attendanceDATA = await attendancedata.json();
            setattendancee(attendanceDATA)
        } catch (error) {
            console.log(error)
        }

    }, [])


    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student-List</h1>
                <Link to={`/add-attendance/${Params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Add-Attendance</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Attendance</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Student-Id</th>

                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                           
                            <tbody>
                                {
                                    attendancee.map((element) => {
                                        return <tr>
                                            <td>{Params.id}</td>
                                            <td>{element.name}</td>
                                            <td><Link to={`/add-attendance/${Params.id}`}><button className='btn btn-primary'>Add-Attendance</button></Link></td>

                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Attendancelist
