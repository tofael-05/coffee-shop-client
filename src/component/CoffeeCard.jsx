import { BsEyeFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirm')
            
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }
    return (
        <main>
            <div className="flex items-center gap-6 shadow-lg justify-between p-4 rounded border bg-[#F5F4F1]">
                <div>
                    <img src={photo} alt="" />
                </div>
                <div className="flex items-center justify-between w-full rounded">
                    <div>
                        <h1 className="text-2xl font-semibold">Name: <span className="font-normal">{name}</span></h1>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div>
                        <button className="text-2xl bg-[#8a7465] text-white p-3 rounded"><BsEyeFill /></button> <br />
                        <Link to={`update-coffee/${_id}`}><button className="text-2xl bg-blue-900 text-white p-3 my-4 rounded"><FiEdit /></button></Link> <br />
                        <button onClick={() => handleDelete(_id)} className="text-2xl bg-red-500 text-white p-3 rounded"><AiFillDelete /></button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CoffeeCard;