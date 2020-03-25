type DateTime = string;

export interface Row {
  call_number: string;
  unit_id: string;
  incident_number: string;
  call_type: string;
  call_date: DateTime;
  watch_date: DateTime;
  received_dttm: DateTime;
  entry_dttm: DateTime;
  dispatch_dttm: DateTime;
  response_dttm: DateTime;
  on_scene_dttm: DateTime;
  call_final_disposition: string;
  available_dttm: DateTime;
  address: string;
  city: string;
  zipcode_of_incident: string;
  battalion: string;
  station_area: string;
  box: string;
  original_priority: string;
  priority: string;
  final_priority: string;
  als_unit: boolean;
  call_type_group: string;
  number_of_alarms: string;
  unit_type: string;
  unit_sequence_in_call_dispatch: string;
  fire_preventions_district: string;
  supervisor_district: string;
  neighborhoods_analysis_boundries: string;
  location: {
    latitude: string;
    longitude: string;
    human_address: {
      address: string;
      city: string;
      state: string;
      zip: string;
    }
  },
  rowid: string;
}