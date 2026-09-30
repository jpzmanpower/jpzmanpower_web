import React from 'react'

const Additional = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            <section className="mb-16">
                <h3 className="text-3xl font-bold mb-5">Additional Support Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 shadow-lg rounded-lg ">
                        <h4 className="font-bold mb-2 text-xl ">Pre-Departure</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Cultural orientation</li>
                            <li>• Language training</li>
                            <li>• Document processing</li>
                            <li>• Travel arrangements</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-lg ">
                        <h4 className="font-bold mb-2 text-xl ">Settlement Support</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Accommodation assistance</li>
                            <li>• Bank account setup</li>
                            <li>• Local registration help</li>
                            <li>• Emergency contact support</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-xl rounded-lg ">
                        <h4 className="font-bold mb-2 text-xl ">Ongoing Assistance</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Contract renewal support</li>
                            <li>• Career progression advice</li>
                            <li>• Legal consultation</li>
                            <li>• Family visa assistance</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Additional
