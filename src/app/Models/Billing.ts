export interface Billing {
    
    id: String;
    titulo: String;
    fechaExpedicion: Date;
    fechaFacturacion: Date;
    numbBilling: Date;
    codBarras: Number;
    calidaRetenedor: String;
    reteIca: Number;
    reteIva: Number;
    reteFuente: Number;
    declarado: String;
    nombreImpresor: String;
    nitImpresor: Number;
    user: Array<String>;
    payment: Array<String>;
    ataraxia: Array<String>;
   }