import "./App.css";

function App() {
  const options = {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      "cache-control": "no-cache",
    },
  };
  const url =
    "https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/estaciones/?api_key=";
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW51bGxhbm9yZWJhbmFsQGdtYWlsLmNvbSIsImp0aSI6ImUwNDlhZmY3LWZhMzYtNDIxNC05M2UzLTY1MjNlNDg4NWEyNSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzEyODMzMDQ0LCJ1c2VySWQiOiJlMDQ5YWZmNy1mYTM2LTQyMTQtOTNlMy02NTIzZTQ4ODVhMjUiLCJyb2xlIjoiIn0.bhit6Yh3LFjaLq28FMVnntGStzVTfJExtEfa_Ua2ha0";
  fetch(url + key, options)
    .then((response) => {
      // Verificar si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error("Hubo un problema al obtener los datos.");
      }
      // Convertir la respuesta a formato JSON
      return response.json();
    })
    .then((data) => {
      // Aquí puedes trabajar con los datos obtenidos
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default App;
