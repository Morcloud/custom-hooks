# queryString helper

Ejemplo de uso:
```
    import { useLocation } from 'react-router-dom'
    ...
    const {search} = useLocation()
    const { q = '' } = queryString(search)
```
