export interface Welcome {
    id:            number;
    tipo:          Tipo;
    latitud:       string;
    longitud:      string;
    descripcion:   string;
    imagen:        string;
    potencia:      number;
    provincia:     Provincia;
    activa:        boolean;
    inicio:        Date;
    fin:           null;
    observaciones: null;
}

export interface Provincia {
    id:     string;
    nombre: string;
}

export interface Tipo {
    id:   number;
    tipo: string;
}
