import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-10 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <img
                        className="w-80 sm:w-[400px]"
                        src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?cs=srgb&dl=boat-luxury-river-163236.jpg&fm=jpg"
                        alt="hero-img"
                    />
                </div>

                {/* RIGHT TEXT */}
                <div className="text-center sm:text-left space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        Download Now <br />
                        <span className="text-3xl sm:text-4xl">Lorem Ipsum</span>
                    </h2>

                    <Link
                        className="inline-flex items-center px-6 py-3 text-white font-medium bg-orange-700 rounded-lg hover:opacity-90"
                        to="/"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp; Download now
                    </Link>
                </div>
            </div>
        </div>
    );
}
