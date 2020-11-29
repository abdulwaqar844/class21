import React from 'react';
import { useQuery, gql } from '@apollo/client';
const get_AllStudent = gql`
  query AllStudents {
    Students {
      name,
      Program,smester
    }
  }
`;
function Students() {
    const { loading, error, data } = useQuery(get_AllStudent);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { Students } = data;
    return (<div>
        <table border="1">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Program</td>
                    <td>Smester</td>
                </tr>
            </thead>
            <tbody>            {
                Students.map(std => {
                    return (<tr>
                        <td>{std.name}</td>
                        <td>{std.Program}</td>
                        <td>{std.smester}</td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
    )



}

export default Students;
