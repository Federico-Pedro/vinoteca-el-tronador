import styles from "./contact.module.css";
import { useForm, ValidationError } from '@formspree/react';
import Back from '../back/back.jsx'

function Contact() {
    const [state, handleSubmit] = useForm("mbdvvnab");
    if (state.succeeded) {
        return <p>Gracias por comunicarte</p>;
    }
    return (
        <div className={styles.formContainer}>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="email">
                    Email
                </label>
                <input className={styles.input}
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea className={styles.textarea}
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className={styles.button} type="submit" disabled={state.submitting}>
                    Enviar
                </button>
            </form>
            <Back />
        </div>
    );
}

export default Contact