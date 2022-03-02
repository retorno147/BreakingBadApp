# Iniciar proyecto

Primero clonar el proyecto y aplicar npm install y para compilarlo en local npm start

## Resumen de la app

Para realizar la app, hemos utilizado Hooks, Redux, React Router Dom, React i18next.

Tiene dos pantallas que la navegacion se realiza mediante React Router Dom.

He añadido un nabvar para poder situar el cambio de lenguaje y un titulo a la App.

### `Hooks`

Hemos utilizado, useEffect para la inicialización de los componentes.
useMemo para memorizar los valores en el buscador y hacer la lista

### `Redux`

Para el cambio de estado según la llamada a la Api.

useSelector para extraer los datos que hemos guardado en el store.

useDispatch para retornar la funcion almacenada en redux.

### `React Router Dom`

React Router DOM es un paquete npm que le permite implementar enrutamiento dinámico en una aplicación web.

### `React i18next`

react-i18next es un framework de internalización.

useTranslation para traducir los textos.

