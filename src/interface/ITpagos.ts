export default interface Tpagos {
    id_Tpago: number;
    descripcion: string;
    fechapago: Date;
    referencia: string;
    monto: number;
    statuspagos: boolean;
    Tipopagos: string;
    id_user: number;
}
