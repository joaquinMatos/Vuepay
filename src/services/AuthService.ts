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
    }
}