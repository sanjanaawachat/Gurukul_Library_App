import Table from 'react-bootstrap/Table';
//import { Bookdata } from '../Pages/Home';
import React from 'react';

//  const data = useContext(Bookdata);
//   console.log(data);

   function BasicExample({data}) {
    function deleteRow(r){
      const rowindex= r.target.parentNode.parentNode.rowIndex;
      // console.log(rowindex-1);
      const tbody= document.getElementsByTagName('tbody')[0];
      tbody.deleteRow(rowindex-1);
      let bookdata=data;
      bookdata.splice(rowindex-1,1)
      // console.log(bookdata)
      localStorage.setItem('data', JSON.stringify(bookdata))
    }
    return (
      <Table striped bordered hover  >
        <thead>
          <tr>
            <th>S No</th>
            <th>Book name</th>
            <th>Author</th>
            <th>Type</th>
            <th>Delete 🎉<i className='fa-solid fa-trash-can'></i></th>
            </tr>
        </thead>
        <tbody>
          {
            data.map((val, i) => {
              return (
                // <tr>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{val.bookname}</td>
                  <td>{val.author} </td>
                  <td>{val.type}</td>
                  <td className='h5 text-center'><i className='fa-solid fa-trash-can'onClick={(e)=>{deleteRow(e)}}></i></td>
                </tr>
                // </tr>
              )
            })
          }
          
        </tbody>
      </Table>
    );
  }


export default BasicExample;
