import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor, ActionConfig } from 'custom-card-helpers';

//tjl add support for hass.formatEntityState as custom-card-helpers does not include it.
//  https://developers.home-assistant.io/docs/frontend/data/#entity-state-formatting
//  https://github.com/home-assistant/frontend/blob/dev/src/types.ts
import type { HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from "home-assistant-js-websocket";
export interface HassFormatEntityState extends HomeAssistant {
  formatEntityState(stateObj: HassEntity, state?: string): string;
}


declare global {
  interface HTMLElementTagNameMap {
    'platinum-weather-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}
export interface HassCustomElement extends CustomElementConstructor {
  getConfigElement(): Promise<unknown>;
}

export const sectionNames = ['overview', 'extended', 'slots', 'daily_forecast'];
export type sectionType = typeof sectionNames[number];

export type layoutOverview = "complete" | "observations" | "forecast" | "title only";
export type layoutOrientation = "horizontal" | "vertical";
export type layoutDays = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type extendedDays = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type pressureDecimals = 0 | 1 | 2 | 3;
export type timeFormat = 'system' | '12hour' | '24hour';

export const conditionDefaults = [
  'sunny',          
  'mostly sunny',
  'partly sunny',
  'intermittent clouds',
  'hazy sunshine',
  'mostly cloudy',
  'cloudy',
  'dreary (overcast)',
  'fog',
  'showers',
  'mostly cloudy w/ showers',
  'partly sunny w/ showers',
  'mostly cloudy w/ t-storms',
  'partly sunny w/ t-storms',
  'rain',
  'flurries',
  'mostly cloudy w/ flurries',
  'partly sunny w/ flurries',
  'snow',
  'mostly cloudy w/ snow',
  'ice',
  'sleet',
  'freezing rain',
  'rain and snow',
  'hot',
  'cold',
  'windy',
  'clear',
  'mostly clear',
  'partly cloudy',
  'intermittent clouds',
  'hazy moonlight',
  'mostly cloudy',
  'partly cloudy w/ showers',
  'mostly cloudy w/ showers',
  'partly cloudy w/ t-storms',
  'mostly cloudy w/ flurries',
  'mostly cloudy w/ snow'
];

// TODO Add your configuration elements here for type-checking
export interface WeatherCardConfig extends LovelaceCardConfig {
  type: string;
  card_config_version?: number;
  section_order: sectionType[];
  show_section_overview?: boolean;
  show_section_extended?: boolean;
  show_section_slots?: boolean;
  show_section_daily_forecast?: boolean;
  overview_layout?: layoutOverview;
  text_card_title?: string;
  text_card_title_2?: string;
  entity_update_time?: string;
  update_time_use_attr?: boolean;
  update_time_name_attr?: string;
  text_update_time_prefix?: string;
  entity_temperature?: string;
  entity_apparent_temp?: string;
  entity_forecast_icon?: string;
  entity_summary?: string;
  option_show_overview_decimals?: boolean;
  option_show_overview_separator?: boolean;
  entity_extended?: string;
  extended_use_attr?: boolean;
  extended_name_attr?: string;
  slot_l1?: string;
  slot_l2?: string;
  slot_l3?: string;
  slot_l4?: string;
  slot_l5?: string;
  slot_l6?: string;
  slot_l7?: string;
  slot_l8?: string;
  slot_r1?: string;
  slot_r2?: string;
  slot_r3?: string;
  slot_r4?: string;
  slot_r5?: string;
  slot_r6?: string;
  slot_r7?: string;
  slot_r8?: string;
  entity_humidity?: string;
  entity_pressure?: string;
  entity_visibility?: string;
  entity_wind_bearing?: string;
  entity_wind_speed?: string;
  entity_wind_gust?: string;
  entity_wind_speed_kt?: string;
  entity_wind_gust_kt?: string;
  entity_temp_next?: string;
  entity_temp_next_label?: string;
  entity_temp_following?: string;
  entity_temp_following_label?: string;
  entity_forecast_max?: string;
  entity_forecast_min?: string;
  entity_observed_max?: string;
  entity_observed_min?: string;
  entity_fire_danger?: string;
  entity_pop?: string;
  entity_pos?: string;
  entity_sun?: string;
  entity_uv_alert_summary?: string;
  entity_rainfall?: string;
  entity_todays_fire_danger?: string;
  entity_todays_uv_forecast?: string;

  custom1_value?: string;
  custom1_icon?: string;
  custom1_units?: string;
  custom2_value?: string;
  custom2_icon?: string;
  custom2_units?: string;
  custom3_value?: string;
  custom3_icon?: string;
  custom3_units?: string;
  custom4_value?: string;
  custom4_icon?: string;
  custom4_units?: string;

  entity_forecast_icon_1?: string;
  entity_pop_1?: string;
  entity_pos_1?: string;
  entity_summary_1?: string;
  entity_forecast_min_1?: string;
  entity_forecast_max_1?: string;
  entity_extended_1?: string;
  entity_fire_danger_1?: string;

  daily_forecast_layout?: layoutOrientation;
  daily_forecast_days?: layoutDays;
  daily_extended_forecast_days?: extendedDays;
  daily_extended_use_attr?: boolean;
  daily_extended_name_attr?: string;

  option_today_temperature_decimals?: boolean;
  option_today_rainfall_decimals?: boolean;
  option_pressure_decimals?: pressureDecimals;
  option_color_fire_danger?: boolean;

  option_locale?: string;
  option_static_icons?: boolean;
  option_time_format?: timeFormat;
  option_tooltips?: boolean;
  old_daily_format?: boolean;
  option_show_beaufort?: boolean;

  //tjl added.  This is where the subscribe entity/events go to
  weather_entity: string;

 //tjl used in code but missing here, so added
  tempformat?: string;

  entity?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  style?: string;

  // Conditions and Icons
  // Conditions and Icons
  option_condition_1?: string;
  option_condition_2?: string;
  option_condition_3?: string;
  option_condition_4?: string;
  option_condition_5?: string;
  option_condition_6?: string;
  option_condition_7?: string;
  option_condition_8?: string;
  option_condition_9?: string;
  option_condition_10?: string;
  option_condition_11?: string;
  option_condition_12?: string;
  option_condition_13?: string;
  option_condition_14?: string;
  option_condition_15?: string;
  option_condition_16?: string;
  option_condition_17?: string;
  option_condition_18?: string;
  option_condition_19?: string;
  option_condition_20?: string;
  option_condition_21?: string;
  option_condition_22?: string;
  option_condition_23?: string;
  option_condition_24?: string;
  option_condition_25?: string;
  option_condition_26?: string;
  option_condition_27?: string;
  option_condition_28?: string;
  option_condition_29?: string;
  option_condition_30?: string;
  option_condition_31?: string;
  option_condition_32?: string;
  option_condition_33?: string;
  option_condition_34?: string;
  option_condition_35?: string;
  option_condition_36?: string;
  option_condition_37?: string;
  option_condition_38?: string;
  option_condition_39?: string;
  option_condition_40?: string;
  

  option_icon_1?: string;
  option_icon_2?: string;
  option_icon_3?: string;
  option_icon_4?: string;
  option_icon_5?: string;
  option_icon_6?: string;
  option_icon_7?: string;
  option_icon_8?: string;
  option_icon_9?: string;
  option_icon_10?: string;
  option_icon_11?: string;
  option_icon_12?: string;
  option_icon_13?: string;
  option_icon_14?: string;
  option_icon_15?: string;
  option_icon_16?: string;
  option_icon_17?: string;
  option_icon_18?: string;
  option_icon_19?: string;
  option_icon_20?: string;
  option_icon_21?: string;
  option_icon_22?: string;
  option_icon_23?: string;
  option_icon_24?: string;
  option_icon_25?: string;
  option_icon_26?: string;
  option_icon_27?: string;
  option_icon_28?: string;
  option_icon_29?: string;
  option_icon_30?: string;
  option_icon_31?: string;
  option_icon_32?: string;
  option_icon_33?: string;
  option_icon_34?: string;
  option_icon_35?: string;
  option_icon_36?: string;
  option_icon_37?: string;
  option_icon_38?: string;
  option_icon_39?: string;
  option_icon_40?: string;  


}



