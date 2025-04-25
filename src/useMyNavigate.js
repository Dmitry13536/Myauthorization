import { useNavigate } from "react-router-dom";

export const useMyNavigate = () => {
    const navigate = useNavigate();
    return (path, options) =>  navigate(path, options);
}