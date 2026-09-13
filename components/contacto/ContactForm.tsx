import { useState, FormEvent } from "react";
import { TextInput, Textarea, Button } from "@mantine/core";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

// TODO: reemplazar con el endpoint real de Formspree antes de publicar.
// 1. Crea un formulario en https://formspree.io
// 2. Copia su endpoint (con forma https://formspree.io/f/xxxxxxx)
// 3. Define NEXT_PUBLIC_FORMSPREE_ENDPOINT en .env.local (desarrollo) y en las
//    variables de entorno del proyecto en el hosting (producción)
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/REPLACE_ME";

const emptyValues: FormValues = { name: "", email: "", message: "" };
const emailPattern = /^\S+@\S+\.\S+$/;

function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const nextErrors: Partial<FormValues> = {};
    if (!values.name.trim()) nextErrors.name = "Escribe tu nombre.";
    if (!emailPattern.test(values.email)) nextErrors.email = "Escribe un correo válido.";
    if (!values.message.trim()) nextErrors.message = "Escribe tu mensaje.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-md mx-auto px-6 text-center bg-white rounded-2xl shadow-sm p-10">
          <p className="font-heading text-xl text-ink">¡Gracias! Te contactaremos pronto.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="max-w-md mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="font-heading text-2xl text-ink text-center mb-6">Escríbenos</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] h-px w-px overflow-hidden"
              aria-hidden="true"
            />
            <TextInput
              label="Nombre"
              name="name"
              withAsterisk
              value={values.name}
              onChange={(event) => setValues({ ...values, name: event.currentTarget.value })}
              error={errors.name}
            />
            <TextInput
              label="Correo"
              name="email"
              type="email"
              withAsterisk
              value={values.email}
              onChange={(event) => setValues({ ...values, email: event.currentTarget.value })}
              error={errors.email}
            />
            <Textarea
              label="Mensaje"
              name="message"
              withAsterisk
              minRows={4}
              value={values.message}
              onChange={(event) => setValues({ ...values, message: event.currentTarget.value })}
              error={errors.message}
            />
            {status === "error" && (
              <p className="text-accent text-sm">
                Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbenos por redes sociales.
              </p>
            )}
            <Button type="submit" radius="xl" loading={status === "submitting"}>
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
