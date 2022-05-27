import { useEffect, useState } from "react";

const useGetConnectedUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const u = localStorage.getItem("user");
        if (u) {
            setUser(JSON.parse(u));
        }
        return {

        }
    }, []);

    const userConnected =  {

        isAdmin: () => (user?.role.name === "ADMINISTRATEUR"),
        isAffiler: () => (user?.role.name === "AFFILIER"),
        isEmployeur: () => (user?.role.name === "EMPLOYEUR"),
        isCandidat: () => (user?.role.name === "CANDIDAT"),
        user:  user,

    }

    return { 
        userConnected
    };
}
 
export default useGetConnectedUser;