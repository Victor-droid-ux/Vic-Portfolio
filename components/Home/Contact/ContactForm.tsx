import React from 'react'

const ContactForm = () => {
    return (
        <section className="bg-[#140c1c] text-white px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className='text-2xl md:text-3xl lg:text-[2.5rem] font-bold mb-4'>
                    Let's Work Together!
                </h1>
                <p className='text-gray-300 text-sm md:text-base mb-3'>
                    I’m open to freelance, contract, or full‑time roles. Whether you need a responsive website, custom web app, or end‑to‑end TypeScript/React solution — let’s connect!
                </p>
                <p className='text-gray-300 text-sm md:text-base mb-8'>
                    Feel free to reach out via email, LinkedIn, or through this contact form. I’d love to discuss how we can make your ideas a reality.
                </p>

                <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input
                        type="text"
                        placeholder="First name"
                        className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
                    />

                    <select className='col-span-1 md:col-span-2 mt-2 bg-black text-white px-6 py-3.5 rounded-md border border-gray-600 outline-none'>
                        <option value="" disabled selected>Select an option</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="fullstack">Fullstack Development</option>
                    </select>

                    <textarea
                        rows={6}
                        placeholder="Message"
                        className='col-span-1 md:col-span-2 mt-2 bg-black text-white placeholder:text-gray-500 px-6 py-3.5 rounded-md border border-gray-600 outline-none'
                    ></textarea>

                    <div className="col-span-1 md:col-span-2">
                        <button className='w-full bg-[#7947df] hover:bg-[#5c2fb7] transition-all duration-150 py-3.5 rounded-full font-medium'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
