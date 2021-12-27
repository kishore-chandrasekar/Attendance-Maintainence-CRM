import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

function Studentlist() {

    const [students, setstudents] = useState([])
    useEffect(async () => {
        try {
            let studentdata = await fetch("https://6196d2b3af46280017e7e2d0.mockapi.io/students");
            let studentList =  await studentdata.json()
            setstudents(studentList)
        } catch (error) {
            console.log(error)
        }

    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student-List</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i></a>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {students.map((student) => {
                                    return <tr>
                                        <td>{student.name}</td>
                                        <td><img src={student.avatar}></img></td>
                                        <td>
                                           <Link to={`/student/${student.id}`}> <button className="btn btn-primary ">Veiw</button></Link>
                                            </td>

                                    </tr>

                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Studentlist
