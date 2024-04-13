export default interface Tpagos {
    id_Tpago: number;
    descripcion: string;
    fechapago: Date;
    referencia: string;
    monto: number;
    id_user: number;
    statuspago: boolean;
    Tipopagos: string;
}
