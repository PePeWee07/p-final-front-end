export interface PersonaPage {
    content?:          Content[];
    pageable?:         Pageable;
    totalElements?:    number;
    last?:             boolean;
    totalPages?:       number;
    size?:             number;
    number?:           number;
    sort?:             Sort;
    numberOfElements?: number;
    first?:            boolean;
    empty?:            boolean;
}

export interface Content {
    id?:         number;
    nombre?:     string;
    apellido?:   string;
    interes?:    string;
    comentario?: string;
    foto?:       string;
}

export interface Pageable {
    sort?:       Sort;
    offset?:     number;
    pageSize?:   number;
    pageNumber?: number;
    paged?:      boolean;
    unpaged?:    boolean;
}

export interface Sort {
    empty?:    boolean;
    sorted?:   boolean;
    unsorted?: boolean;
}
