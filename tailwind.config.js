module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: () => ({
          'landing-background':
              "linear-gradient(270deg, rgba(255, 255, 255, 0) 2.08%, rgba(0, 0, 0, 0.32) 74.67%, rgba(0, 0, 0, 0.2) 100%), url('/src/assets/img/bg-home.webp')",
          'servicio1': "linear-gradient(270deg, rgba(255, 255, 255, 0) 2.08%, rgba(0, 0, 0, 0.32) 74.67%, rgba(0, 0, 0, 0.2) 100%),url('/src/components/assets/servicios/servicio1.png')",
          'servicio2': "linear-gradient(270deg, rgba(255, 255, 255, 0) 2.08%, rgba(0, 0, 0, 0.32) 74.67%, rgba(0, 0, 0, 0.2) 100%),url('/src/components/assets/servicios/servicio2.png')",
          'servicio3': "linear-gradient(270deg, rgba(255, 255, 255, 0) 2.08%, rgba(0, 0, 0, 0.32) 74.67%, rgba(0, 0, 0, 0.2) 100%),url('/src/components/assets/servicios/servicio3.png')",
          'servicio4': "linear-gradient(270deg, rgba(255, 255, 255, 0) 2.08%, rgba(0, 0, 0, 0.32) 74.67%, rgba(0, 0, 0, 0.2) 100%),url('/src/components/assets/servicios/servicio4.png')",
          'landing-background-responsive':
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 2.08%, rgba(0, 0, 0, 0.32) 74.67%, rgba(0, 0, 0, 0.2) 100%), url('/src/assets/img/bg-resp.png')",
      
        }),
  },
  },
  variants: {},
  plugins: [],
}

