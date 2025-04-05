import type {ICountry} from "@/interfaces/countries/interface";

export interface IAirlines {
  id: number;
  name: string;
  country: ICountry;
}

export interface IAirlineCreatePayload {
  id: number;
  name: string;
  country_id: number;
}

export interface IAirlineEditPayload {
  id: number;
  body: IAirlineCreatePayload;
}

export interface IAirlinesTableProps {
  handleEditModalOpen: (row: IAirlineCreatePayload) => void;
  handleDeleteModalOpen: (row: IAirlineCreatePayload) => void;
}
