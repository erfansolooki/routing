import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../Common/Input";
import { useNavigate } from "react-router-dom";
import { loginServices } from "../../Services/loginServices";
import { useAuthActions } from "../../Context/AuthProvider";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";

const initialValues = {
  userName: "",
  password: "",
};

const validationSchema = Yup.object({
  userName: Yup.string().required("نام کاربری وارد کنید"),
  password: Yup.string().required("رمز عبور وارد کنید"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const setAuth = useAuthActions();
  const onSubmit = async (values) => {
    try {
      const { data } = await loginServices(values);
      const userData = data.data;
      const userToken = userData.userToken;
      setAuth(userToken);
      navigate("/");
      localStorage.setItem("userToken", JSON.stringify(userToken));
      setError(null);
    } catch (error) {
      if (error) {
        setError("نام کاربری یا رمز عبور اشتباه است");
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Container className="loginForm">
      <Row
        dir="rtl"
        className="d-flex justify-content-center align-items-center"
      >
        <Col xs={10} md={8} xl={7} xxl={6} className="loginBorder">
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="my-3 mx-0 title fw-bold">ورود</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="userName"
                label="نام کاربری"
                type="userName"
                placeholder={"نام کاربری را وارد کنید"}
              />
              <Input
                formik={formik}
                name="password"
                label="رمز عبور"
                type="password"
                placeholder={"رمز عبور را وارد کنید"}
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="submitButton w-100 my-3 border-0 text-white py-2 px-3"
              >
                ورود
              </button>
              {error && (
                <p className="text-start" style={{ color: "red" }}>
                  {error}
                </p>
              )}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
