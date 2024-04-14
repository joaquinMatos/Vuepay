import type ITpagos from '@/interface/ITpagos';

const API_URL = 'http://localhost:5000/api';

export default{
    async getTpagos(): Promise<ITpagos[]> {
        try {
            const response = await fetch(`${API_URL}/tpagos`);
            if (!response.ok) {
              throw new Error('No se pudieron recuperar los datos de los usuarios');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return[];
        }
    },
    async registerUser(name: string, apellido: string, email: string, password: string): Promise<void> {
      try {
        const userData = { name, apellido, email, password };
        /* console.log('Datos a enviar:', userData);  */

        const response = await fetch(`${API_URL}/insertdata/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'No se pudo registrar el usuario');
        }
        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);  
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw error;  // Lanzar el error para manejarlo en el componente o en otra parte de la aplicación
      }
    }, 
    async registerCobro(name: string, apellido: string, email: string, password: string): Promise<void> {
      try {
        const userData = { name, apellido, email, password };
        /* console.log('Datos a enviar:', userData);  */

        const response = await fetch(`${API_URL}/insertdata/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'No se pudo registrar el usuario');
        }
        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);  
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw error;  // Lanzar el error para manejarlo en el componente o en otra parte de la aplicación
      }
    },
    async loginUser(email: string, password: string): Promise<{ token: string } | null> {
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Credenciales incorrectas');
        }
    
        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);
    
        return responseData;
    
      } catch (error) {
        console.error('Error al intentar hacer login:', error);
        throw error;
      }
    }
}