/*
---
import Item from './Item.astro'
import dolar_response from '../../mocks/dolares.json'

export async function fetchData(url: string) {
  //setLoading(true);
  return fetch(url)
    .then(response => {
      if (!response.ok) { throw new Error('Error al obtener los datos'); }
      return response.json();
    })
    .then(data => {
      //setLoading(false);
      return data;
    })
    .catch(error => {
      console.error('Error:', error.message);
      //setError(error.message);
      //setLoading(false);
      return null;
    });
}

const apiUrl = import.meta.env.API_URL
const data = await fetchData(apiUrl)
const dataMock = dolar_response

---

<main class="flex flex-col justify-center items-center mb-10">
  <!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
  <section class={`
    grid gap-4 m-16
    lg:grid-cols-3 lg:max-w-6xl
    md:grid-cols-2 md:max-w-2xl
    sm:grid-cols-2 sm:max-w-xl
  `}>
    {
      //dataMock.map( item => <span>{item.venta} </span>)
      data.map( item => <Item value={item} />)
      
    }
  </section>
  <span class="text-gray-400 dark:text-gray-500">
    <em>
      Última Actualización: {dataMock[0].fechaActualizacion.split("T")[0]} 
    </em>
  </span>
</main>
*/

//const apiUrl = import.meta.env.API_URL; // Asegúrate de configurar correctamente la variable de entorno API_URL

import Item from './Item.astro'
import { useState, useEffect } from 'preact/hooks';

export const MainContainer = () => {

  useEffect(() => {
    console.log('El componente se ha montado');
  }, []);

  //const apiUrl = process.env.API_URL; // Asegúrate de configurar correctamente la variable de entorno API_URL

  // Función para realizar la petición de datos
  async function fetchData(url) {
    console.log('response')
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }

  const [data, setData] = useState([]);

  console.log('res')
  
  useEffect(() => {
    console.log('first')
    const fetchDataAsync = async () => {
      console.log('fetchDataAsync')
      const result = await fetchData("");
      if (result) {
        console.log('result:',result)
        setData(result);
      }
    };

    fetchDataAsync();
  }); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <main class="flex flex-col justify-center items-center mb-10">
      <p class="text-white">{data}</p>
      <section class={`
        grid gap-4 m-16
        lg:grid-cols-3 lg:max-w-6xl
        md:grid-cols-2 md:max-w-2xl
        sm:grid-cols-2 sm:max-w-xl
      `}>
        {/*data.map( item => <Item value={item} />)*/}
      </section>
      <span class="text-gray-400 dark:text-gray-500">
        <em>
          {data.map( (item) => <p>{item}</p>)}
         {/*  Última Actualización: {data[0].fechaActualizacion.split("T")[0]} */}
        </em>
      </span>
    </main>
  );
}
