import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeAdded = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();


        const form = event.target;


        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        // Send data to the server 
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {console.log(data); {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        }});
    }
    return (
        <div>
             <Link to="/"><p>Back to home</p></Link>
            <form onSubmit={handleAddCoffee} className="bg-[#e7e7e7] mt-32">


                <h1 className="text-center text-5xl font-sans font-bold my-10">Add New Coffee</h1>
                <p className="text-center mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, reprehenderit deleniti quam numquam quas inventore. <br /> Laudantium ea, officiis perspiciatis esse libero eaque.</p>


                <div className=" grid md:grid-cols-2 gap-4 p-4">
                    <div>
                        <label htmlFor="">Coffee Name</label>
                        <input className="w-full border p-2" type="text" name="name" placeholder="Enter coffee name" />
                    </div>
                    <div>
                        <label htmlFor="">Available Quantity</label>
                        <input className="w-full border p-2" type="text" name="quantity" placeholder="Available Quantity" />
                    </div>
                    <div>
                        <label htmlFor="">Supplier Name</label>
                        <input className="w-full border p-2" type="text" name="supplier" placeholder="Enter coffee supplier" />
                    </div>
                    <div>
                        <label htmlFor="">Taste</label>
                        <input className="w-full border p-2" type="text" name="taste" placeholder="Enter coffee taste" />
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <input className="w-full border p-2" type="text" name="category" placeholder="Enter coffee category" />
                    </div>
                    <div>
                        <label htmlFor="">Details</label>
                        <input className="w-full border p-2" type="text" name="details" placeholder="Enter coffee details" />
                    </div>
                </div>
                <div className="px-4">
                    <label htmlFor="">Photo </label>
                    <input className="w-full border p-2 mb-4" type="text" name="photo" placeholder="Enter photo URL" />
                </div>
                <div className="px-4">
                    <button className="w-full p-2 bg-[#8a7465] text-white">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default CoffeeAdded;