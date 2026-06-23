import { useState } from "react";
import "./Contact.css"
//At the bottom of the page I want a way people can contact me via the api/messages post mapping so have the user fill out the form with email and then a large textbox to be able to insert there message for my review
function Contact() {
    const initialForm = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: "idle", message: "" });

    function updateForm(event) {
        const { name, value } = event.target;
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    }

    async function sendMessage(event) {
        event.preventDefault();
        setStatus({ type: "sending", message: "Sending..." });

        try {
            const response = await fetch("https://portfolio-api.kyrillos.dev/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error("Message failed");
            }

            setForm(initialForm);
            setStatus({ type: "success", message: "Message sent. I'll get back to you soon." });
        } catch {
            setStatus({ type: "error", message: "Message could not be sent right now." });
        }
    }

    return (
        <section className="Contact">
            <div className="Contact-heading">
                <p className="Contact-label">Contact</p>
            </div>

            <form className="Contact-form" onSubmit={sendMessage}>
                <div className="Contact-row">
                    <label>
                        First name
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={updateForm}
                            autoComplete="given-name"
                        />
                    </label>
                    <label>
                        Last name
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={updateForm}
                            autoComplete="family-name"
                        />
                    </label>
                </div>

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={updateForm}
                        autoComplete="email"
                        required
                    />
                </label>

                <label>
                    Message
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={updateForm}
                        rows="7"
                        required
                    ></textarea>
                </label>

                <div className="Contact-actions">
                    <button type="submit" disabled={status.type === "sending"}>
                        {status.type === "sending" ? "Sending" : "Send Message"}
                    </button>
                    {status.message && <p className={`Contact-status Contact-status-${status.type}`}>{status.message}</p>}
                </div>
            </form>
        </section>
    );
}

export default Contact;
