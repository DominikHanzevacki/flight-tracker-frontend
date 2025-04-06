import type {ICountry} from "../countries/interface";
import type {IPosition} from "@interfaces/google-maps/position/interface";
import type {IAirline} from "@interfaces/airlines/interface";

export interface IAirport {
  id: number;
  name: string;
  country: ICountry;
  position: IPosition;
  airlines: IAirline[];
}

export interface IAirportCreatePayload extends Omit<IAirport, 'country' | 'airlines'> {
  country_id: number;
  airlines: number[];
}

export interface IAirportEditPayload {
  id: number;
  body: IAirportCreatePayload;
}

export interface IAirportTableProps {
  handleEditModalOpen: (row: IAirportCreatePayload) => void;
  handleDeleteModalOpen: (row: IAirportCreatePayload) => void;
}
