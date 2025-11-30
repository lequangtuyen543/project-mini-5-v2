import { useNavigate } from "react-router-dom";
import { clearAllCookies, deleteCookie } from "../../helpers/cookie";
import { checkLogin } from "../../actions/login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // clearAllCookies();
  deleteCookie("token");

  useEffect(() => {
    dispatch(checkLogin(false));
    navigate("/login");
  }, []);

  return <></>;
};