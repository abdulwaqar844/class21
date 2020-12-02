import React from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
const get_AllStudent = gql`
  query AllStudents {
    Students {
        id,
      name,
      Program,
      smester
    }
  }
`;
const ADD_STUDENT = gql`
  mutation addStudent($id: Int!, $name:String!, $Program : String!, $smester:String!) {
    addStudent(input:{
        id:$id,
        name:$name,
        Program:$Program,
        smester:$smester
      })
      {id}
  }
`;
function Students() {
    const { loading, error, data } = useQuery(get_AllStudent);
    const [addStudent] = useMutation(ADD_STUDENT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { Students } = data;
    return (<div>
        <table border="1">
            <thead>
                <tr>
                    <td>ID</td>

                    <td>Name</td>
                    <td>Program</td>
                    <td>Smester</td>
                </tr>
            </thead>
            <tbody>            {
                Students.map(std => {
                    return (<tr key={std.id}>
                        <td>{std.id}</td>
                        <td>{std.name}</td>
                        <td>{std.Program}</td>
                        <td>{std.smester}</td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
        <button onClick={() => {
            addStudent(
                {
                    variables: {
                        id: 14,
                        name: "yasir",
                        Program: "7th Zolo",
                        smester: "3rd"
                    },     
                                   refetchQueries: [{ query: get_AllStudent }]

                }
            )
        }
        }

        >Add Sutdent</button>
    </div>
    )



}

export default Students;
