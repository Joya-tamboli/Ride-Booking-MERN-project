import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        fullName: {
            firstName: "",
            lastName: "",
        },
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}> {/* ✅ Provide an object */}
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
