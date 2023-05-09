import img1 from '../../public/cups/Rectangle 9.png'
import img2 from '../../public/cups/Rectangle 10.png'
import img3 from '../../public/cups/Rectangle 11.png'
import img4 from '../../public/cups/Rectangle 12.png'
import img5 from '../../public/cups/Rectangle 13.png'
import img6 from '../../public/cups/Rectangle 14.png'
import img7 from '../../public/cups/Rectangle 15.png'
import img8 from '../../public/cups/Rectangle 16.png'


const FollowingInsta = () => {
    return (
        <section className="my-28">
            <h1 className="text-center text-4xl font-semibold mt-16 mb-4">Follow In Instagram</h1>
            <p className="text-center mb-16">Follow Us Now</p>
            <div className="grid md:grid-cols-4 gap-6 w-full">
                <div>
                    <img className="w-full" src={img1} alt="" />
                </div>
                <div>
                    <img className="w-full" src={img2} alt="" />
                </div>
                <div>
                    <img className="w-full" src={img3} alt="" />
                </div>
                <div>
                    <img className="w-full" src={img4} alt="" />
                </div>
                <div>
                    <img className="w-full" src={img5} alt="" />
                </div>
                <div>
                    <img className="w-full" src={img6} alt="" />
                </div>
                <div>
                    <img className="w-full" src={img7} alt="" />
                </div>
                <div>
                    <img className="w-full" src={img8} alt="" />
                </div>
            </div>
            
        </section>
    );
};

export default FollowingInsta;