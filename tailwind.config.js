// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
      },
      colors: {
        purple: {
          100: "#D6CFD8",
          200: "#8C8A94",
          600: "#524D60",
          900: "#433F4F"
        },
        gray: {
          100: "#FCFAFA"
        },
        teal: {
          500: "#39C1BC",
          900: "#0F4D4A"
        }
      },
      inset: {
        full: "100%",
        "1/2": "50%"
      },
      width: {
        1: "3px",
        80: "21rem"
      },
      borderRadius: {
        sm: ".25rem",
        default: ".4375rem"
      },
      boxShadow: {
        default: "0px 4px 14px rgba(0, 0, 0, 0.25)",
        "inset-combo":
          "0px 2px 2px rgba(0, 0, 0, 0.06), inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
        "inset-teal":
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 3px 0px #55D3B8"
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".gradient": {
          background: "linear-gradient(99.32deg, #8555B8 1.22%, #1D6399 167.6%)"
        }
      };

      addUtilities(newUtilities);
    },
    // Aliases
    function({ addUtilities, theme }) {
      const newUtilities = {
        ".alias-max-w-index-wide": {
          "max-width": theme("maxWidth").sm
        },
        ".alias-rounded-index": {
          "border-radius": theme("borderRadius").default
        }
      };

      addUtilities(newUtilities);
    }
  ]
};