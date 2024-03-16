import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, H2, Input } from "../../components";
import { Link, Navigate } from "react-router-dom";
import { setUser } from "../../actions";
import { useDispatch, useSelector, useStore } from "react-redux";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constant";

const autFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(/^\w+$/, "Неверный логин. Он должен состоять из букв и цифр")
    .min(3, "Длина логина должна быть больше 3 символов")
    .max(15, "Длина логина должна быть меньше 15 символов"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(/^[\w#%]+$/, "Пароль может состоять только из букв, цифр, №, %")
    .min(6, "Длина пароля должна быть более 6 символов")
    .max(30, "Длина пароля должна быть менее 30 символов"),
});

export const Authorization = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { login: "", password: "" },
    resolver: yupResolver(autFormSchema),
  });

  const [serverError, setServerError] = useState("");
  const dispatch = useDispatch();
  const store = useStore();
  const roleId = useSelector(selectUserRole);

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;
    return store.subscribe(() => {
      let prevWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;

      if (currentWasLogout != prevWasLogout) {
        reset();
      }
    });
  }, []);

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ res, error }) => {
      if (error) {
        setServerError("Ошибка запроса:" + error);
        return;
      }
      dispatch(setUser(res));
    });
  };
  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <AuthContainer>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин"
          {...register("login", {
            onChange: () => setServerError(""),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль"
          {...register("password", { onChange: () => setServerError("") })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизироваться
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <StyledLink to="/register">Регистрация</StyledLink>
      </form>
    </AuthContainer>
  );
};

const AuthContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& form": {
    display: "flex",
    flexDirection: "column",
    width: "260px",
  },
});

const StyledLink = styled(Link)({
  textAlign: "center",
  textDecoration: "underline",
  margin: "20px 0",
  fontSize: "18px",
});

const ErrorMessage = styled.div({
  backgroundColor: "#fcadad",
  fontSize: "18px",
  margin: "10px 0 0",
  padding: "10px",
});
