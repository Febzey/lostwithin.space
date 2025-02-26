export default function ScannerPage() {

    return (
        <div className="w-full min-h-screen flex flex-col items-center p-10 relative mt-[10vh]">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-center flex flex-col md:text-5xl font-extrabold text-violet-500 tracking-wide uppercase">
                    (IST)
                    <span className="text-gray-300 text-4xl"> Internet Scan Thing </span>
                </h1>
                <p className=" md:text-lg text-gray-600 font-space text-xs max-w-3xl text-center">
                    The Internet was designed to be public
                </p>
            </div>

            <div className="w-full lg:w-2/3 m-4 h-[1px] bg-gradient-to-r from-violet-500 to-violet-300"></div>

            <div className="py-10 flex flex-col w-full lg:w-2/3 gap-8">
                <div className="text-white flex w-full flex-col">
                    <h2 className="font-Bakbak text-2xl">What is this? </h2>
                    <p>
                        So the internet is big, but not that big - roughly only <a href="https://blogs.ipv4mall.com/blogs/how-many-ipv4-addresses-are-there/" className="text-blue-500" target="_blank">4.2 billion IP's world wide</a>, What we (IST) aims to do is
                        scan and document each IP address on the internet, and provide a platform for users to search and view the data,
                        with teamwork and dedication this is a possible goal. While tools like Shodan exist and are great, we aim to provide a
                        community driven and enjoyable learning experience for all
                    </p>
                </div>

                <div className="text-white flex w-full flex-col">
                    <h2 className="font-Bakbak text-2xl">What is the point?</h2>
                    <p>
                        This data allows us to answer questions that would otherwise be difficult to explore.
                        For example, suppose we wanted to identify every publicly accessible Minecraft server worldwide—this data makes that possible.

                        Similarly, we could use it to map all publicly exposed database servers, helping researchers understand the state of internet security and identify misconfigurations before bad actors exploit them.
                    </p>
                </div>

                <div className="text-white flex w-full flex-col">
                    <h2 className="font-Bakbak text-2xl">How does it work?</h2>
                    <p>
                        We primarily utilize <a href="https://github.com/robertdavidgraham/masscan" className="text-blue-500">Masscan</a> for scanning due to its speed and efficiency. All gathered
                        data is hosted in a central database, making it easy for everyone to access. We also built
                        a simple application to run Masscan and automatically send the results to our shared
                        database for further analysis. You don't need to be technically savvy to contribute; we
                        make it easy to get started.
                        <br></br>
                        If you're not interested in our masscan app you can also contribute by running masscan
                        yourself and sending the results to us.
                    </p>
                </div>

                <div className="text-white flex w-full flex-col">
                    <h2 className="font-Bakbak text-2xl">How can I Contribute</h2>
                    <p>
                        To contribute, you can start by joining our <a href="https://discord.gg/AcddMYg5" className="text-blue-500">Discord Server</a>, 
                        where you'll learn more about the project and how to get involved. Once you're familiar with the process, you'll be assigned an IP range to scan, 
                        with the option to use our tool or set up Masscan manually. You'll also learn how to properly report back the results.
                        <br></br>
                        <br></br>
                        There's no pressure—this is a fun and educational project, especially for those looking to gain hands-on experience. The end goal is both rewarding and insightful. Contributors will be valued and kept closely informed about the project's inner workings, with full access to the collected data.
                    </p>
                </div>
            </div>

        </div>
    )
}