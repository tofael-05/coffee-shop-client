import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();


        const form = event.target;


        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const updateCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateCoffee)

        // Send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data); {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                }
            });
    }

    return (
        <div>
            <form onSubmit={handleUpdateCoffee} className="bg-[#e7e7e7] mt-32">


                <h1 className="text-center text-5xl font-sans font-bold my-10 mt-10">Update Coffee: {name}</h1>
                <p className="text-center mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, reprehenderit deleniti quam numquam quas inventore. <br /> Laudantium ea, officiis perspiciatis esse libero eaque.</p>


                <div className=" grid md:grid-cols-2 gap-4 p-4">
                    <div>
                        <label htmlFor="">Coffee Name</label>
                        <input className="w-full border p-2" type="text" name="name" defaultValue={name} placeholder="Enter coffee name" />
                    </div>
                    <div>
                        <label htmlFor="">Available Quantity</label>
                        <input className="w-full border p-2" type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" />
                    </div>
                    <div>
                        <label htmlFor="">Supplier Name</label>
                        <input className="w-full border p-2" type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" />
                    </div>
                    <div>
                        <label htmlFor="">Taste</label>
                        <input className="w-full border p-2" type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" />
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <input className="w-full border p-2" type="text" name="category" defaultValue={category} placeholder="Enter coffee category" />
                    </div>
                    <div>
                        <label htmlFor="">Details</label>
                        <input className="w-full border p-2" type="text" name="details" defaultValue={details} placeholder="Enter coffee details" />
                    </div>
                </div>
                <div className="px-4">
                    <label htmlFor="">Photo </label>
                    <input className="w-full border p-2 mb-4" type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" />
                </div>
                <div className="px-4">
                    <button className="w-full p-2 bg-[#8a7465] mb-10 text-white">Update Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;