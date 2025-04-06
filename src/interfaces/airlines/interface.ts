import type {ICountry} from "@interfaces/countries/interface";

export interface IAirline {
  id: number;
  name: string;
  country: ICountry;
}

export interface IAirlineCreatePayload extends Omit<IAirline, 'country'> {
  country_id: number;
}

export interface IAirlineEditPayload {
  id: number;
  body: IAirlineCreatePayload;
}

export interface IAirlineTableProps {
  handleEditModalOpen: (row: IAirlineCreatePayload) => void;
  handleDeleteModalOpen: (row: IAirlineCreatePayload) => void;
}
