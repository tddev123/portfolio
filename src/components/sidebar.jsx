import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-full flex flex-col">
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Sidebar</h1>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">House sele</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Messages</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Logout</a>
                    </li>
                </ul>
            </nav>
            <div className="p-4 text-center">Your Company</div>
        </div>
    );
};

export default Sidebar;
