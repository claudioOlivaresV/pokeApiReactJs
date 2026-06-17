import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import type { LoginForm } from "../../interfaces/LoginForm.interface";
import { loginAction } from "../actions/login.action";
import { useState } from "react";

export const Login = () => {
  const [loginError, setLoginError] = useState<string>("");
  const formik = useFormik<LoginForm>({
    initialValues: {
      username: "emilys",
      password: "emilyspass",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .lowercase()
        .max(20, "Usuario demasiado largo")
        .matches(/^[a-z0-9._-]+$/, "Formato de usuario inválido")
        .required("Usuario requerido"),

      password: Yup.string()
        .trim()
        .min(8, "Mínimo 8 caracteres")
        // evita passwords gigantes
        .max(20, "Password demasiado largo")
        // evita espacios internos
        .matches(/^\S*$/, "No puede contener espacios")
        .required("Password requerido"),
    }),

    onSubmit: async (values) => {
      const payload = {
        username: values.username.trim().toLowerCase(),
        password: values.password.trim(),
      };

      console.log(payload);
      try {
        const response = await loginAction(payload.username, payload.password);
        console.log(response);
      } catch (error) {
        setLoginError("Usuario o contraseña incorrectos");
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-3">
      {/* username */}

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground">
          User name
        </label>
        <Input
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="claudio"
          className="
            h-10
            rounded-xl
            bg-background/60
          "
        />

        {formik.touched.username && formik.errors.username && (
          <span
            className="
                text-xs
                text-red-500
              "
          >
            {formik.errors.username}
          </span>
        )}
      </div>

      {/* PASSWORD */}

      <div className="space-y-1.5">
        <label
          className="
          text-xs
          font-medium
          text-muted-foreground
          "
        >
          Password
        </label>

        <Input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="••••••••"
          className="
            h-10
            rounded-xl
            bg-background/60
          "
        />

        {formik.touched.password && formik.errors.password && (
          <span
            className="
              text-xs
              text-red-500
              "
          >
            {formik.errors.password}
          </span>
        )}
      </div>
      {loginError && (
        <div
          className="
              rounded-lg
              bg-red-500/10
              p-3
              text-sm
              text-red-500
            "
        >
          {loginError}
        </div>
      )}

      <Button
        type="submit"
        disabled={formik.isSubmitting}
        className="
          h-10
          w-full
          rounded-xl
          shadow-mac
        "
      >
        {formik.isSubmitting ? "Ingresando..." : "Sign in"}
      </Button>
    </form>
  );
};
