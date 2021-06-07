# expensive-control-app

Application para controlar tus gastos personales.

## Instalar el proyecto en local

Se debe ejecutar el siguiente comando tanto en el directorio raiz como en los directorios <b>app</b> y <b>api</b>:

```bash
npm install
```

## Arrancar en modo local / desarrollo

### General - Frontend y backend juntos

En el directorio raiz, ejecutar el siguiente comando para arranca el servidor de <b>api</b>, contruyendo la build de <b>app</b>:

```bash
npm run start:dev
```

También es posible ejecutar el siguiente comando, que tendría el mismo resultado, y su única diferencia es que en modo `dev` levanta el servidor de <b>api</b> con `nodemon`, el cual permite el auto-refresco cuando se modifican los archivos y sin modo `dev` lo levanta con `node` (Realmente está pensado para el despliegue en `Heroku`):

```bash
npm run start
```

### Específico - Frontend y backend por separado

- `Frontend:` Dentro del directorio <b>app</b>, ejecutar:

```bash
npm run start
```

- `Backend:` Dentro del directorio <b>api</b>, ejecutar:

```bash
npm run start:dev
```

## Errores - Linter

Para ver los errores de `ESLint` en todos ficheros:

```bash
npm run lint
```

Y si se quieren corregir automáticamente:

```bash
npm run lint:fix
```

## Formatedor de código

Para ver los problemas de `Prettier` en el formato de todo el código del proyecto:

```bash
npm run format
```

Y si se quieren corregir automáticamente:

```bash
npm run format:fix
```
