/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["./images.html"],
    content: ["./index.html"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#ea580c",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
