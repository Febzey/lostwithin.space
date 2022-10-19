import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="w-full min-h-[45vh] bg-slate-600 flex items-center justify-center py-16" id="contact">
            <div className="gap-12 w-[90%] lg:w-[65%] bg-neutral-50 rounded-lg shadow-2xl py-16 lg:px-9 px-3 flex flex-col lg:flex-row">

                <div className="text-neutral-600 font-poppins lg:text-left text-center flex flex-col gap-2 justify-center">
                    <p className="text-zinc-500 text-lg">Feel free to contact me if you want something made.</p>
                </div>

                <a href="mailto:braydent1235@gmail.com" className="text-neutral-100 shadow-md mx-auto duration-300 ease-in-out motion-safe:hover:scale-105 motion-safe:hover:-translate-y-3 lg:mx-0 lg:ml-auto bg-indigo-600 font-bold text-xl rounded w-44 h-16 gap-2 text-center justify-center flex items-center font-poppins">
                    <FaEnvelope />
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Contact;